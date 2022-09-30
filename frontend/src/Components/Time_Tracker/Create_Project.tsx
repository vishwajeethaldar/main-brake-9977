import { Box,Menu,Button,MenuItem,MenuList,MenuButton,Text, Input } from "@chakra-ui/react";
import React from "react";
import {IoAddCircleSharp} from "react-icons/io5"
import { Project_Model } from "./Project_Model";
const Create_Project = () => {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}} leftIcon={<IoAddCircleSharp color='#03a9f4' fontSize={"30px"}/>}>
        <Text color={"#03a9f4"}>Project</Text>
        </MenuButton>
        <MenuList padding={"10px"} width={"300px"} >
          <Input size={"md"} placeholder="Find project or client"/>
          <Project_Model/>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Create_Project;
