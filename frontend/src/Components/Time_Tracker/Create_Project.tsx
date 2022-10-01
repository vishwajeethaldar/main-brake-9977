import { Box,Menu,Button,MenuItem,MenuList,MenuButton,Text, Input } from "@chakra-ui/react";
import React,{useState} from "react";
import {IoAddCircleSharp} from "react-icons/io5"
import { getProjects } from "../../features/projects/projectsSlice";
import { projectType } from "../../features/types/types";
import { Project_Model } from "./Project_Model";
import {useAppSelector} from "../../features/hooks"
import axios from "axios";
type createProjectProps={
  setViewProject:Function;
  handleProjectName:Function;
}
const Create_Project = ({setViewProject,handleProjectName}:createProjectProps) => {
  const token = useAppSelector(store=>store.authSlice.token)
  const [projects, setProjects ]  = useState<projectType[]>([])
  const onClick=(name:string)=>{
    handleProjectName(name)
    setViewProject(true)
  }
  const hanleGetProject = async(val:string)=>{
      let data = await axios.get(`https://clockify-clone-app.herokuapp.com/projects?q=${val}`, {
        headers:{
          token:token
        }
      })
      setProjects(data.data)
      console.log(projects)
  }

  return (
    <Box>
      
      <Menu>
        <MenuButton as={Button} bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}} leftIcon={<IoAddCircleSharp color='#03a9f4' fontSize={"30px"}/>}>
        <Text color={"#03a9f4"}>Project</Text>
        </MenuButton>
        <MenuList padding={"10px"} width={"300px"} >
          <Input onChange={(e)=>hanleGetProject(e.target.value)} size={"md"} placeholder="Find project or client"/>
          {
            projects?.map((project)=>{
              return <MenuItem onClick={()=>onClick(project.name)} key={project._id}> {project.name}</MenuItem>
            })
          }
          <Project_Model />
        </MenuList>
      </Menu>
      
    </Box>
  );
};

export default Create_Project;
