import { Button } from "@mui/material";
import { FaArrowRight, FaBed, FaPhoneAlt, FaTablets, FaVial } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="md:w-2/5">
        <img
          src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2022/04/appoinment-img.png"
          alt="image"
        />
      </div>
      <div className="md:w-3/5 flex flex-col gap-8">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-2/6">
            <div className=" px-2 py-5 border-2">
              <div className="py-5 text-5xl px-5 text-orange-400 ">
                <p className="bg-orange-100 w-24 py-2 pl-5">
                  <FaBed />
                </p>
              </div>
              <h1 className=" text-xl font-bold my-2">Visit a Doctor</h1>
              <p className="mb-5">
                We provide the a wide range of medical services, so every person
                could have the opportunity...
              </p>
              <Button
                variant="outlined"
                className="flex items-center gap-3    px-5 py-2 rounded-lg"
              >
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </div>
          <div className="md:w-2/6">
            <div className=" px-2 py-5 border-2">
              <div className="py-5 text-5xl px-5 text-green-500 ">
                <p className="bg-green-100 py-2 w-24 pl-5 ">
                  <FaTablets />
                </p>
              </div>
              <h1 className=" text-xl font-bold my-2">Medical</h1>
              <p className="mb-5">
                We provide the a wide range of medical services, so every person
                could have the opportunity...
              </p>
              <Button
                variant="outlined"
                className="flex items-center gap-3    px-5 py-2 rounded-lg"
              >
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </div>
          <div className="md:w-2/6">
            <div className=" px-2 py-5 border-2">
              <div className="py-5 text-5xl px-5 text-red-400 ">
                <p className="bg-red-100 py-2 w-24 pl-5">
                  <FaVial />
                </p>
              </div>
              <h1 className=" text-xl font-bold my-2">Services</h1>
              <p className="mb-5">
                We provide the a wide range of medical services, so every person
                could have the opportunity...
              </p>
              <Button
                variant="outlined"
                className="flex items-center gap-3    px-5 py-2 rounded-lg"
              >
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/6 border-2 py-8 px-5">
            <h1 className="text-2xl  ">Schedule</h1>
            <div className="flex items-center justify-between mt-5">
              <h3 className="font-bold mt-2">Monday – Friday</h3>
              <p>8.00 – 13.00</p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold mt-2">Saturday</h3>
              <p>8.00 – 15.00</p>
            </div>
          </div>
          <div className="w-full md:w-4/6">
            <div className="bg-sky-700 md:px-5 py-3 text-white">
              <h1 className=" text-3xl md:text-5xl mb-5 ">Request an Appointment</h1>
              <div className="flex items-center gap-6">
                <p className="text-3xl md:text-5xl"><FaPhoneAlt/></p>
                <div className="flex-col text-3xl md:text-5xl">
                    <p>Call us on</p>
                    <h1>+880 1600127050</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
