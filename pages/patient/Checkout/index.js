import { TextField } from "@mui/material";
import React from "react";
import PlaceIcon from '@mui/icons-material/Place';

const index = () => {
  return (
    <div className="flex flex-wrap w-10/12 mx-auto gap-3 md:gap-10 my-16 md:my-20">
      <div className="w-full md:w-7/12 border-2 shadow-lg px-5 py-10">
        <h1>Personal Information</h1>
        <div>
          <div className="w-full flex gap-6">
            <TextField
              className=" mt-5 w-1/2"
              label="Name"
              variant="outlined"
            />
            <TextField
              className=" mt-5 w-1/2"
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="w-full flex gap-6">
          <TextField
            className="w-full mt-5"
            label="Phone number"
            variant="outlined"
          />
          <TextField
            className="w-full mt-5"
            label="Address"
            variant="outlined"
          />
          </div>
          <div className="text-end">
            <button className="bg-gray-800 text-white text-lg uppercase px-8 py-3 mt-10 rounded-xl hover:bg-sky-500">Confirm Booking</button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 border-2 shadow-lg py-8 px-5">
        <h1 className="text-xl font-bold mb-5">Booking Summary</h1>
        <div className="flex gap-6 items-center">
            <img src="https://yt3.googleusercontent.com/ytc/AGIKgqPmK1ByzeeLa49q6DJoTKm0_2kTHVXaIpaV25FSYw=s900-c-k-c0x00ffffff-no-rj" alt="" height={100} width={100} />
            <div>
            <h2 className="text-lg">Doctor Name: </h2>
            <p className="text-gray-500 pt-2"><span><PlaceIcon /></span> Mirpur-10, Dhaka</p>
            </div>
        </div>
        <div className="border-b-2 border-gray-300 py-3"></div>
        <div className="pt-2 flex items-center justify-between">
            <p>Date: </p>
            <p>3 Jul 2023</p>
        </div>
        <div className="pt-2 flex items-center justify-between">
            <p>Time: </p>
            <p>6:30 - 7:00 Pm</p>
        </div>
        <div className="pt-2 flex items-center justify-between">
            <p>Consulting Fee: </p>
            <p>500</p>
        </div>
        <div className="pt-2 flex items-center justify-between">
            <p>Booking Fee: </p>
            <p>50</p>
        </div>
        <div className="pt-2 border-b-2 border-gray-300"></div>
        <div className="pt-2 flex items-center justify-between">
            <p>Total Fee: </p>
            <p>550</p>
        </div>
      </div>
    </div>
  );
};

export default index;
