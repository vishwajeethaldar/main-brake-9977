import { Box, Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import {BsSearch} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from "../../../features/hooks"
import { filterQueryType } from "./Filter"
import {useEffect,useState,useRef} from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { projectType } from "../../../features/types/types"
import { getUser } from "../../../features/users/usersSlice"
import { getLocalProducts, getProjects } from "../../../features/projects/projectsSlice"

export const Search = ({setFilterQuery,filterQuery}:{filterQuery:filterQueryType, setFilterQuery:Function}) => {
  const dispatch = useAppDispatch()
  const ref = useRef<any>()
  const projects = useAppSelector(store=>store.projectsSlice)
  const auth = useAppSelector(store=>store.authSlice)
  const [myProject, setmyProject] =  useState<projectType[]>([])
  useEffect(() => {
    setmyProject(projects.products)
    console.log(myProject)
  }, [])
  
  const handleSerch = (val:string)=>{
   let proj =  projects.products.filter((project)=>{
        return project.name.includes(val);
    })
    setmyProject(proj)
  }


  return (
    <Box w="100%" >
       <Menu >
        <MenuButton w="100%">
        <InputGroup>
        <InputLeftAddon children={<BsSearch/>}/>
        {/* value={ref.current.value||""} */}
        <Input ref={ref} type="search" name="searchProject" placeholder="Project Name"  />
        </InputGroup>
        </MenuButton>
      <MenuList maxH={"200px"}  overflow={"scroll"}>
      <Input onChange={(e)=>handleSerch(e.target.value)} type="text/" name="searchProject" placeholder="search project" mx={"3%"} h="50px" w="94%" mb="15px"/>
       <MenuItem color={"#0f532"}  fontSize={"1.2em"}  fontWeight={"700"} borderBottom={"1px solid #999"} onClick={()=>dispatch(getLocalProducts())}> Clear Search</MenuItem>
        {
        myProject?.map((project:projectType)=>{
          return <MenuItem  onClick={()=>{
            setFilterQuery({...filterQuery, name:project.name})
            ref.current.value=project.name;
          }} key={project._id} w={["320px","500px","400px","500px"]}>{project.name}</MenuItem>
        })
      }
      </MenuList>
      </Menu>
    </Box>
  )
} 
