import PlaceIcon from "@mui/icons-material/Place";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const index = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="w-9/12 mx-auto my-16 md:my-20 border-2 px-5 py-10 shadow-2xl">
      <div className="flex gap-6 items-center">
        <img
          src="https://yt3.googleusercontent.com/ytc/AGIKgqPmK1ByzeeLa49q6DJoTKm0_2kTHVXaIpaV25FSYw=s900-c-k-c0x00ffffff-no-rj"
          alt=""
          height={100}
          width={100}
        />
        <div>
          <h2 className="text-lg">Doctor Name: </h2>
          <p className="text-gray-500 pt-2">
            <span>
              <PlaceIcon />
            </span>{" "}
            Mirpur-10, Dhaka
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-teal-600"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Wed
                  <p>3 Jul 2023</p>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-teal-600"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Thu
                  <p>4 Jul 2023</p>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-teal-600"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Fri
                  <p>5 Jul 2023</p>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-teal-600"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Sat
                  <p>6 Jul 2023</p>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 5
                      ? "text-white bg-teal-600"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Sun
                  <p>7 Jul 2023</p>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 6
                      ? "text-white bg-teal-600"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(6);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Mon
                  <p>8 Jul 2023</p>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 7
                      ? "text-white bg-teal-600"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(7);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Tue
                  <p>9 Jul 2023</p>
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="flex flex-col">
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Time
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="6:30 - 7:00 Pm"
                          control={<Radio />}
                          label="6:30 - 7:00 Pm"
                        />
                        <FormControlLabel
                          value="7:00 - 7:30 Pm"
                          control={<Radio />}
                          label="7:00 - 7:30 Pm"
                        />
                        <FormControlLabel
                          value="7:30 - 8:00 Pm"
                          control={<Radio />}
                          label="7:30 - 8:00 Pm"
                        />
                      </RadioGroup>
                    </FormControl>
                    <button className="bg-gray-800 text-white hover:bg-sky-300 px-5 py-3 rounded-md w-36 mt-10">Submit</button>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    Hello2
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    Hello3
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link3"
                  >
                    Hello4
                  </div>
                  <div
                    className={openTab === 5 ? "block" : "hidden"}
                    id="link3"
                  >
                    Hello5
                  </div>
                  <div
                    className={openTab === 6 ? "block" : "hidden"}
                    id="link3"
                  >
                    Hello6
                  </div>
                  <div
                    className={openTab === 7 ? "block" : "hidden"}
                    id="link4"
                  >
                    <p>
                      $$$$$Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
