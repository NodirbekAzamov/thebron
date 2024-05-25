import React, { useState } from "react";
import logo from "../../assets/images//Logo.png";
import { Button, Flex, Image, Select, Stack, Text } from "@chakra-ui/react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "../login/Login";
import { NavLink } from "react-router-dom";
import "./style.css"
import img_uz from "../../assets/img_uz.jpg"
import img_usa from "../../../public/img_usa.svg"


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [select, setSelect] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const change = () => {
    setSelect(prev => !prev)
  }

  return (
    <Flex flexWrap="wrap" justifyContent="space-between" py="30px">
      <NavLink to="/">
        <Image src={logo} alt="logo" w={{ base: "100px", md: "130px" }} />
      </NavLink>
      <Flex w="150px" align="center" justifyContent="space-between">

        <Flex align="center" cursor={"pointer"} gap={"5px"} onClick={change} >
          <LanguageIcon />
          <p>ru</p>
        </Flex>

        <div className={`${select ? "block" : "none"} select`}>
          <div className="select_box">
            <Image src={img_uz} alt="img" />
            <h5>uzb</h5>
          </div>
          <div className="select_box">
            <Image src={img_usa} alt="img" />
            <h5>uzb</h5>
          </div>
          <div className="select_box">
            <Image src={img_uz} alt="img" />
            <h5>uzb</h5>
          </div>
          
        </div>

        {/* <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
 */}
        {/* <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box> */}


        {/* <Stack spacing={3}>
          <Select placeholder='extra small size' size='xs' />
        </Stack> */}

        <Box >
          <Button onClick={openModal}>Login</Button>
          <Login isOpen={isModalOpen} onClose={closeModal} />
        </Box>
        {/* <Box cursor="pointer">
          <MenuIcon />
        </Box> */}
      </Flex>
    </Flex>
  );
}

export default Header;
