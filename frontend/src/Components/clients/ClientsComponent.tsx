import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  useMediaQuery,
  Center
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FiMoreVertical, FiEdit2 } from "react-icons/fi";
import { addClients, deleteClient, getClients } from "../../features/clients/clientSclice";
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import DeleteClientModal from "./DeleteClientModal";
import EditClientModal from "./EditClientModal";

const ClientsComponent = () => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((store) => store.clientSlice);
  const auth = useAppSelector((store) => store.authSlice);
  const [client, setClient] = useState<string>("")
  const [userId, email, password] = auth.token.split(":");
  const [clientId, setClientId] = useState<string>("");

  useEffect(()=>{
    dispatch(getClients({token:auth.token}));
    console.log(clientId)
    console.log(clients.clients);
    console.log(email)
  }, []);

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setClient(e.target.value)
  }

  const onClick = () => {
    let data = {name: client, userId: userId};
    dispatch(addClients({token:auth.token, data:data}));
    dispatch(getClients({token:auth.token}));
  }

  const handleDelete:Function = (c:any) => {
    dispatch(deleteClient({token:auth.token, id:c}));
  }
  
  const [isLargerThan1365, isSmallerThan1365, isLargerThan991, isSmallerThan991, isLargerThan173, isSmallerThan173] = useMediaQuery([
    '(min-width: 1365px)', 
    '(max-width: 1365px)',
    '(min-width: 991px)', 
    '(max-width: 991px)',
    '(min-width: 173px)', 
    '(max-width: 173px)',
  ])

  if(isLargerThan1365){
  return (
    <Box backgroundColor={"#f2f6f8"} padding={"2.8572rem .7143rem"}>
      <Heading marginBottom={"40px"} fontSize="24px" color={"#666666"} fontWeight={400}>Clients</Heading>
      <Flex marginBottom={"20px"}>
        <Flex gap={"10px"}>
          <Box>
            <Select borderRadius={"0px"}>
              <option value="show all">Show active</option>
              <option value="show active">Show archived</option>
              <option value="show inactive">Show all</option>
            </Select>
          </Box>
          <Box>
            <Input borderRadius={"0px"} placeholder="Search by name or email" />
          </Box>
        </Flex>
        <Spacer />
        <Flex textAlign={"right"} gap={"10px"}>
          <Box>
            <Input borderRadius={"0px"} value={client} onChange={onChange} placeholder="Add new client" />
          </Box>
          <Box>
            <Button borderRadius={"0px"} onClick={onClick} backgroundColor={"#038fce"} color="white">
              ADD
            </Button>
          </Box>
        </Flex>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {clients.clients.map((client) => {
              console.log(client._id)
              return <Tr key={client.name}>
              <Td>{client.name}</Td>
              <Td>{client._id}</Td>
              <Td>
                <EditClientModal />
              </Td>
              <Td>
              <Button onClick={() => {
                // setClientId(client._id)
                console.log(clientId)
              }}>
                  <DeleteClientModal name={client.name} handleDelete={()=>handleDelete(client._id)} />
              </Button>
              </Td>
            </Tr>
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
  }

  if(isSmallerThan1365 && isLargerThan991){
    return (
      <Box>
        <Heading>Clients</Heading>
        <Flex>
            <Box>
              <Select>
                <option value="show all">Show active</option>
                <option value="show active">Show archived</option>
                <option value="show inactive">Show all</option>
              </Select>
            </Box>
            <Box>
              <Input placeholder="Search by name or email" />
            </Box>
          </Flex>
          <Flex>
              <Input placeholder="Add new client" />
            <Box>
              <Button backgroundColor={"#038fce"} color="white">
                ADD
              </Button>
            </Box>
          </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Client 1</Td>
                <Td></Td>
                <Td>
                <FiEdit2 />
                </Td>
                <Td>
                <Button>
                    <FiMoreVertical />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  if(isSmallerThan991 && isLargerThan173){
    return (
      <Box>
        <Heading>Clients</Heading>
        <Flex>
            <Box>
              <Select>
                <option value="show all">Show active</option>
                <option value="show active">Show archived</option>
                <option value="show inactive">Show all</option>
              </Select>
            </Box>
            <Box>
              <Input placeholder="Search by name or email" />
            </Box>
          </Flex>
          <Flex>
          <Input placeholder="Add new client" />
            <Box>
              <Button backgroundColor={"#038fce"} color="white">
                ADD
              </Button>
            </Box>
          </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name & Address</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Client 1</Td>
                <Td></Td>
                
              </Tr>
              <Tr>
              <Td>
                <Center>
                  <FiEdit2 />
                </Center>
                
                </Td>
                <Td>
                <Button>
                  <Center>
                  <FiMoreVertical />
                  </Center>
                    
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

if(isSmallerThan173){
  return (
    <Box>
      <Heading>Clients</Heading>
        <Flex>
          <Box>
            <Select>
              <option value="show all">Show active</option>
              <option value="show active">Show archived</option>
              <option value="show inactive">Show all</option>
            </Select>
          </Box>
          <Box>
            <Input placeholder="Search by name or email" />
          </Box>
        </Flex>
        <Input placeholder="Add new client" />
          <Box>
            <Button backgroundColor={"#038fce"} color="white">
              ADD NEW MEMBER
            </Button>
          </Box>
      <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name & Address</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Client 1</Td>
                <Td></Td>
                
              </Tr>
              <Tr>
              <Td>
                <Center>
                  <FiEdit2 />
                </Center>
                
                </Td>
                <Td>
                <Button>
                  <Center>
                  <FiMoreVertical />
                  </Center>
                    
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  );
}
}

export default ClientsComponent;
