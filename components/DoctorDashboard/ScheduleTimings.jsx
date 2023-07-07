import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";


const ScheduleTimings = () => {
    const [openTab, setOpenTab] = React.useState(1);
  const [minute, setMinute] = React.useState("");
  const [minuteOpen, setMinuteOpen] = React.useState(false);
  const [day, setDay] = React.useState("");
  const [dayOpen, setDayOpen] = React.useState(false);
  const handleChange = (event) => {
    setMinute(event.target.value);
  };

  const handleClose = () => {
    setMinuteOpen(false);
  };

  const handleOpen = () => {
    setMinuteOpen(true);
  };
  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const handleCloseDay = () => {
    setDayOpen(false);
  };

  const handleOpenDay = () => {
    setDayOpen(true);
  };

  return (
    <div className="">
      <div className="mt-10">
        <h1 className="text-xl font-bold">Schedule Timings</h1>
        <div className="flex flex-wrap">
          <div className="">
            <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
              Timing Slot Duration
            </Button>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Minutes
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={minuteOpen}
                onClose={handleClose}
                onOpen={handleOpen}
                value={minute}
                label="Minutes"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>15</MenuItem>
                <MenuItem value={30}>20</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <Button sx={{ display: "block", mt: 2 }} onClick={handleOpenDay}>
              Select Day
            </Button>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Select Day
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={dayOpen}
                onClose={handleCloseDay}
                onOpen={handleOpenDay}
                value={day}
                label="Select Day"
                onChange={handleChangeDay}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Sunday"}>Sunday</MenuItem>
                <MenuItem value={"Monday"}>Monday</MenuItem>
                <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"Thursday"}>Thursday</MenuItem>
                <MenuItem value={"Friday"}>Friday</MenuItem>
                <MenuItem value={"Saturday"}>Saturday</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold ">Available Time</h1>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Start Time"
              variant="outlined"
            />
            <TextField
              label="End Time"
              variant="outlined"
            />
          </Box>
        </div>
      </div>
      <div className="text-center mb-5">
        <button className="text-white bg-gray-800 hover:bg-sky-400 text-lg px-8 py-2 rounded-md mt-8">Save</button>
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
                    <div>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Time
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        className="grid grid-cols-6"
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

export default ScheduleTimings;
