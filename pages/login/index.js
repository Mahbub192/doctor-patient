import Lottie from "lottie-react";
import doctor from "/public/134724-doctor-animation.json";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { useLocation } from "react-use";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProvider";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'

const index = () => {
  const router = useRouter()
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    signIn(data.email, data.password)
      .then((current) => {
        const user = current.user;
        reset();
        Swal.fire({
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/')
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mx-auto h-screen flex flex-wrap items-center">
      <div className="md:w-1/2">
        <div className="md:w-2/3  mx-auto">
          <Lottie animationData={doctor} loop={true} />;
        </div>
      </div>
      <div className="md:w-1/2 ">
        <div className="md:w-2/3  py-32 border-2 shadow-2xl  px-8">
          <p className="text-red-500 text-center my-2">{error}</p>
          <h1 className="text-center text-2xl font-bold mb-10">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                className=" w-full"
                id="outlined-controlled"
                label="Email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="relative">
              <TextField
                className="w-full my-5"
                id="outlined-controlled"
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
                className="absolute right-2 bottom-10 text-xl"
              >
                {" "}
                <FaRegEye className=""></FaRegEye>
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                className=" bg-cyan-300 hover:bg-cyan-600 hover:text-white w-full  py-3"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className=" mt-4 flex gap-1 justify-center">
            Create a new{" "}
            <Link href="http://localhost:3000/crateAccount" className="text-sky-800">
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
