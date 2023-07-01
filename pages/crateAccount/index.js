import { AuthContext } from "@/providers/AuthProvider";
import TextField from "@mui/material/TextField";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import doctor from "/public/134724-doctor-animation.json";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Swal from "sweetalert2";

const index = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [confirmShow, setConfirmShow] = useState(true);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  async function sendDataToBackend(data) {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log('Data submitted successfully');
        router.push("/");
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const onSubmit = (data) => {
    setError("");
    console.log("data", data);
    if (data.confirmPassword === data.password) {
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.url)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              image: data.url,
            };
            console.log("saveUser", saveUser);
            sendDataToBackend(saveUser)
          })
          .catch((error) => setError(error));
      });
    } else {
      // todo
      setError(
        "Confirm password and password are not same , please try again!!"
      );
    }
  };

  return (
    <div className="container mx-auto h-screen flex flex-wrap items-center">
      <div className="md:w-1/2">
        <div className="md:w-2/3  mx-auto">
          <Lottie animationData={doctor} loop={true} />;
        </div>
      </div>
      <div className="md:w-1/2 ">
        <div className="md:w-2/3  py-12 border-2 shadow-2xl  px-8">
          <p className="text-red-500 text-center my-2">{error}</p>
          <h1 className="text-center text-xl font-bold mb-10">Registration</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                className=" w-full"
                label="Name"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div>
              <TextField
                className=" w-full my-5"
                label="Email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div>
              <TextField
                className=" w-full"
                label="Photo URL"
                type="url"
                {...register("url", { required: true })}
              />
              {errors.url && (
                <span className="text-red-600">URL is required</span>
              )}
            </div>
            <div className="relative">
              <TextField
                className="w-full my-5"
                label="Password"
                type={show ? "password" : "text"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase, one special character.
                </p>
              )}
              <p
                onClick={() => setShow(!show)}
                className="absolute right-2 bottom-8 text-xl"
              >
                {" "}
                <FaRegEye className=""></FaRegEye>
              </p>
            </div>
            <div className="relative">
              <TextField
                className="w-full"
                label="Confirm Password"
                type={confirmShow ? "password" : "text"}
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Confirm Password is required</p>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <p className="text-red-600">
                  Confirm Password must be 6 characters
                </p>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <p className="text-red-600">
                  Confirm Password must have one Uppercase, one special
                  character.
                </p>
              )}
              <p
                onClick={() => setConfirmShow(!show)}
                className="absolute right-2 bottom-4 text-xl"
              >
                {" "}
                <FaRegEye className=""></FaRegEye>
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-cyan-300 hover:bg-cyan-600 hover:text-white w-full  py-3"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
          <div className=" mt-4 flex gap-1 justify-center">
          Already an{" "}
            <Link href="http://localhost:3000/login" className="text-sky-800">
              <p>Account</p>
            </Link>{" "}
          </div>
          <div className="border-2 mt-5"></div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default index;

index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
