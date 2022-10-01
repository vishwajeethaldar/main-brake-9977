import { Box, Flex, Text,Input } from '@chakra-ui/react'
import {BsCaretDownFill} from 'react-icons/bs'
import { ApplyFilter } from './ApplyFilter'
import { Search } from './Search'
import {clientType, projectType} from '../../../features/types/types'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import axios from 'axios';
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../features/hooks'
import { FaLessThanEqual } from 'react-icons/fa'
import { updateProjects } from '../../../features/projects/projectsSlice'

const DBLINK = "https://clockify-clone-app.herokuapp.com";

export type filterQueryType = {
  access?:boolean;
  billable?:boolean;
  client?:string;
  name?:string;
  archive?:boolean
}

 const  filterParams:filterQueryType = {
  access:true,
  billable:true,
  client:"",
  name:"",
  archive:false
}



export const Filter = ({allProjects, setAllProjects,projects}:{projects:projectType[],allProjects:projectType[],setAllProjects:Function} ) => {

  const [clients, setClients] =  useState<clientType[]>([])
  const auth = useAppSelector(store=>store.authSlice)
  const [filterQuery, setFilterQuery] = useState<filterQueryType>({})
  const dispatch = useAppDispatch()
const seachClients = async(val:string)=>{
  let data=  await axios.get<clientType[]>(`${DBLINK}/clients?q=${val}`,{
    headers:{
      token:auth.token
    }
  })
setClients(data.data)
  
}

const handleSearch =()=>{
  
      let newFilter = projects.filter((project)=>{
        if(filterQuery.access===true||false){
          console.log(project.access, filterQuery);
            return project.access ===filterQuery.access
        }else
        if(filterQuery.archive===true||false){
          return project.archive ===filterQuery.archive
        }else
        if(filterQuery.client){
          return project.client ===filterQuery.client
        }else
        if(filterQuery.name){
              return project.name === filterQuery.name
            }
        }) 
       
            
    dispatch(updateProjects(newFilter))
  }

  return (
    <Flex gap={"20px"} bg="#fff" justify={"space-between"} align={"center"} direction={["column","column", "column","row"]} w="100%" border={"1px solid #ccc"} minH="50px" py="10px" px="10px">
        <Box w={["100%","100%","100%","50%"]}>  
            <Flex justify={"space-around"} pr="20px" pl="10px" wrap={"wrap"} rowGap="10px">
              <Box borderRight={"1px dotted #666"} textAlign={"center"} w={["50%","50%","20%","20%"]} pt="7px" display={["none","none","none","block"]}>
                <Text  fontSize={"18px"} color="#444">Filter</Text>
              </Box>
              <Flex borderRight={"1px dotted #666"} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
              <Menu size="500px">
                    <MenuButton as={Button} /*rightIcon={}*/ variant={"outline"} border={"none"} _hover={{bg:"none"}} _active={{bg:"none"}} >
                    <Flex align={"center"} gap={"10px"}>
                          <Text fontSize={"16px"} >Active</Text> 
                        <BsCaretDownFill fontSize={"10px"}/>
                    </Flex>
                    </MenuButton>
                    <MenuList >
                      <MenuItem onClick={()=>setFilterQuery({...filterQuery, archive:false})}>Active</MenuItem>
                      <MenuItem onClick={()=>setFilterQuery({...filterQuery, archive:true})}>Archived</MenuItem>
                      <MenuItem >All</MenuItem>
                    </MenuList>
                  </Menu>
              </Flex>
              <Flex  borderRight={["none", "none", "1px dotted #666","1px dotted #666"]} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
               
                <Menu >
                    <MenuButton as={Button} /*rightIcon={}*/ variant={"outline"} border={"none"} _hover={{bg:"none"}} _active={{bg:"none"}} >
                    <Flex align={"center"} gap={"10px"}>
                          <Text fontSize={"16px"} >Client</Text> 
                          <BsCaretDownFill fontSize={"10px"}/>
                    </Flex>
                    </MenuButton>
                    <MenuList maxH={"200px"}  overflow={"scroll"}>
                      <Box px={'15px'} mb={'15px'}>
                        <Input onChange={(e)=>seachClients(e.target.value)} type="text" placeholder="Search Client" />
                      </Box>
                      <MenuItem onClick={()=>setFilterQuery({...filterQuery, client:""})} px={'15px'} w={'300px'}>Select All</MenuItem>
                      <MenuItem px={'15px'} >Without Client</MenuItem>
                      {clients?.map((client)=>{
                        return <MenuItem key={client._id} onClick={()=>setFilterQuery({...filterQuery, client:client.name})}>{client.name}</MenuItem>
                      })}
                    </MenuList>
                  </Menu>

               

              </Flex>
              <Flex borderRight={"1px dotted #666"} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
              <Menu >
                    <MenuButton as={Button} /*rightIcon={}*/ variant={"outline"} border={"none"} _hover={{bg:"none"}} _active={{bg:"none"}} >
                    <Flex align={"center"} gap={"10px"}>
                          <Text fontSize={"16px"} >Access</Text> 
                        <BsCaretDownFill fontSize={"10px"}/>
                    </Flex>
                    </MenuButton>
                    <MenuList >
                      <MenuItem onClick={()=>setFilterQuery({...filterQuery, access:true})}>Public</MenuItem>
                      <MenuItem onClick={()=>setFilterQuery({...filterQuery, access:false})}>Private</MenuItem>
                    </MenuList>
                  </Menu>
              </Flex>
              <Flex borderRight={["none", "none", "none","1px dotted #666"]} justify="center" align={"center"} gap={"10px"} textAlign={"center"} w={["50%","50%","25%","20%"]} _hover={{cursor:"pointer"}}>
                  <Menu >
                    <MenuButton as={Button} /*rightIcon={}*/ variant={"outline"} border={"none"} _hover={{bg:"none"}} _active={{bg:"none"}} >
                    <Flex align={"center"} gap={"10px"}>
                          <Text fontSize={"16px"} >Billing</Text> 
                        <BsCaretDownFill fontSize={"10px"}/>
                    </Flex>
                    </MenuButton>
                    <MenuList >
                      <MenuItem onClick={()=>setFilterQuery({...filterQuery, billable:true})}>Billable</MenuItem>
                      <MenuItem onClick={()=>setFilterQuery({...filterQuery, billable:false})}>Non Billable</MenuItem>
                    </MenuList>
                  </Menu>
               
              </Flex>
            </Flex>
        </Box>

        <Box w={["98%","98%","98%","48%"]} >
            <Flex gap={"10px"} justify="space-between" >
             <Box w="80%" >
                <Search filterQuery={filterQuery} setFilterQuery={setFilterQuery}/>
             </Box>
             <Box>
                <ApplyFilter handleSearch={handleSearch}/>
             </Box>
            </Flex>
        </Box>
    </Flex>
  )
}
