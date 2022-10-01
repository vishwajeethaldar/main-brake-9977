import { Box, Input, Stack, Button, Flex,Text} from "@chakra-ui/react"
import { useRef,useEffect } from "react"
import { addClients, getClients } from "../../features/clients/clientSclice"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { projectType } from "../../features/types/types"

export const AddClient = ({setProjectProp,projectProp,setShowClient}:{setProjectProp:Function,projectProp:projectType,setShowClient:Function}) => {
  const dispatch = useAppDispatch()
  const clients_state = useAppSelector(store=>store.clientSlice)
  const token = useAppSelector(store=>store.authSlice.token)
  const [userid,p,r] = token.split(":")
  const ref = useRef<any>()

  useEffect(()=>{
      dispatch(getClients({token:token, query:ref.current.value}))
  },[])
  
  const handleAddClient= ()=>{
    dispatch(addClients({token:token,data:{name:ref.current.value, userId:userid}}))
  }

  const updateClient = (name:string, id:string)=>{

    setProjectProp({...projectProp,client:name, clientId:id})
    setShowClient(false)
  }

  return (
    <Stack maxW={"100%"} py="15px" px="20px">
        <Input name="client" onChange={
          (e)=>{
              dispatch(getClients({token:token, query:e.target.value})) 
          }
          } ref={ref} type={"text"}  placeholder="Add/Find Client" borderRadius={"none"} outline={"1px solid #999"}/>
        <Flex justify={"flex-end"} w={"100%"}>
            <Button border="" bg={"none"} color="blue" _hover={{bg:"none", color:"green", textDecoration:"underline"}} onClick={()=>handleAddClient()} display={clients_state.clients.length===0?"block":"none"}>
                 Add Client
            </Button>
        </Flex>
        <Box>
            {clients_state.clients.map((client)=>{
                return (
                  <Box key={client._id+client.name}>
                    <Text onClick={()=>updateClient(`${client.name}`, `${client._id}`)}>{client.name}</Text>
                  </Box>
                )
            })}
        </Box>

    </Stack>
  )
}
