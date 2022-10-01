import { Box, Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import {BsSearch} from 'react-icons/bs'
import { useAppSelector } from "../../../features/hooks"
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

export const Search = ({setFilterQuery,filterQuery}:{filterQuery:filterQueryType, setFilterQuery:Function}) => {
  const ref = useRef<any>()
  const projects = useAppSelector(store=>store.projectsSlice)
  const [myProject, setmyProject] =  useState<projectType[]>([])
  useEffect(() => {
    setmyProject(projects.products)
    console.log(myProject)
  }, [])
  
  const handleSerch = (val:string)=>{
   let proj =  projects.products.filter((project)=>{
          return project.name.includes(val);
    })
  }
  return (
    <Box w="100%" >
       <Menu>
        <MenuButton w="100%">
        <InputGroup>
        <InputLeftAddon children={<BsSearch/>}/>
        <Input ref={ref} type="search" name="searchProject" placeholder="Project Name" value={ref.current.value} />
        </InputGroup>
        </MenuButton>
      <MenuList>
      <Input onChange={(e)=>handleSerch(e.target.value)} type="text/" name="searchProject" placeholder="search project" mx={"3%"} h="50px" w="94%" mb="15px"/>
        {
        myProject?.map((project:projectType)=>{
          return <MenuItem onClick={()=>{
            setFilterQuery({...filterQuery, name:project})
            ref.current.value=project.name;
          }} key={project._id} w={["320px","500px","400px","500px"]}>{project.name}</MenuItem>
        })
      }
      </MenuList>
</Menu>
    </Box>
  )
} 
