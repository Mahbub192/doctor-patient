import Image from "next/image";
import image1 from "../../public/image1.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const HeroSection = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="flex flex-wrap items-center  justify-around">
        <div className="md:w-1/4">
          <Image src={image1} alt="image" />
        </div>
        <div className="md:w-2/4">
          <h1 className="text-xl mb-2 font-bold md:text-3xl">
            Search Doctor, Make an Appointment
          </h1>
          <p>Discover the best doctors, clinic & hospital the city.</p>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Specialist</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Specialist"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
              label="Doctor Name"
              className="w-full mt-2"
            />
            <p className="text-gray-500">Ex. Dental or Sugar Check up etc</p>
            <Button variant="outlined" size="large" className="w-full mt-5">
              <p className="flex items-center gap-4">
                <span>
                  <FaSearch />
                </span>
                Search
              </p>
            </Button>
          </Box>
        </div>
      </div>
      <div className="container mx-auto">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Regular Checkup"
        />
      </div>
      <div className="container mx-auto ">
        <AvatarGroup
          total={24}
          className="w-52 py-5 shadow-xl rounded-lg bg-slate-100 px-5"
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </div>
    </>
  );
};

export default HeroSection;
