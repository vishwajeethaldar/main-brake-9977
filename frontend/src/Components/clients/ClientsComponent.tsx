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
  Center,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FiMoreVertical, FiEdit2 } from "react-icons/fi";
import {
  addClients,
  deleteClient,
  getClients,
} from "../../features/clients/clientSclice";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import DeleteClientModal from "./DeleteClientModal";
import EditClientModal from "./EditClientModal";

export const ClientsComponent = () => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((store) => store.clientSlice);
  const auth = useAppSelector((store) => store.authSlice);
  const [client, setClient] = useState<string>("");
  const [userId, email, password] = auth.token.split(":");
  const [clientId, setClientId] = useState<string>("");

  useEffect(() => {
    dispatch(getClients({ token: auth.token, query:""}));
    console.log(clients);
    
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient(e.target.value);
  };

  const onClick = () => {
    let data = { name: client, userId: userId };
    dispatch(addClients({ token: auth.token, data: data }));
   
  };

  const handleDelete: Function = (c: string) => {
    dispatch(deleteClient({ token: auth.token, id: c }));
  };

  const [
    isLargerThan1365,
    isSmallerThan1365,
    isLargerThan991,
    isSmallerThan991,
    isLargerThan173,
    isSmallerThan173,
  ] = useMediaQuery([
    "(min-width: 1365px)",
    "(max-width: 1365px)",
    "(min-width: 991px)",
    "(max-width: 991px)",
    "(min-width: 173px)",
    "(max-width: 173px)",
  ]);

  return (
    <>
      {isLargerThan1365 ? (
        <Box backgroundColor={"#f2f6f8"} padding={"2.8572rem .7143rem"}>
          <Heading
            marginBottom={"40px"}
            fontSize="24px"
            color={"#666666"}
            fontWeight={400}
          >
            Clients
          </Heading>
          <Flex marginBottom={"20px"}>
            <Flex gap={"10px"}>
              <Box>
                <Select bg={"white"} borderRadius={"0px"}>
                  <option value="show all">Show active</option>
                  <option value="show active">Show archived</option>
                  <option value="show inactive">Show all</option>
                </Select>
              </Box>
              <Box>
                <Input
                  bg={"white"}
                  borderRadius={"0px"}
                  placeholder="Search by name or email"
                />
              </Box>
            </Flex>
            <Spacer />
            <Flex textAlign={"right"} gap={"10px"}>
              <Box>
                <Input
                  bg={"white"}
                  borderRadius={"0px"}
                  value={client}
                  onChange={onChange}
                  placeholder="Add new client"
                  required
                />
              </Box>
              <Box>
                <Button
                  borderRadius={"0px"}
                  onClick={onClick}
                  backgroundColor={"#038fce"}
                  color="white"
                >
                  ADD
                </Button>
              </Box>
            </Flex>
          </Flex>
          <Box>
            <Flex border={"1px solid"} bg="#e4eaee">
              <Box width={"30%"} padding="10px 10px 10px 20px">
                NAME
              </Box>
              <Box padding="10px 0px">ADDRESS</Box>
            </Flex>
            {clients.clients.map((client) => {
              return (
                <Flex
                  bg="white"
                  padding={"5px"}
                  key={client.name}
                  borderLeft={"1px solid"}
                  borderRight={"1px solid"}
                  borderBottom={"1px solid"}
                >
                  <Box padding="0px 0px 0px 10px" width={"30%"}>
                    {client.name}
                  </Box>
                  <Box
                    borderLeft={"1px dashed"}
                    paddingLeft="10px"
                    width={"63%"}
                  >
                    {client.address}
                  </Box>
                  <Box
                    borderLeft={"1px dashed"}
                    paddingLeft="10px"
                    width={"70px"}
                  >
                    <EditClientModal />
                  </Box>
                  <Box
                    borderLeft={"1px dashed"}
                    paddingLeft="10px"
                    width={"70px"}
                  >
                    <DeleteClientModal
                      name={client.name}
                      handleDelete={() => handleDelete(client._id)}
                    />
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </Box>
      ) : isSmallerThan1365 && isLargerThan991 ? (
        <Box backgroundColor={"#f2f6f8"} padding={"2.8572rem .7143rem"}>
          <Heading
            marginBottom={"40px"}
            fontSize="24px"
            color={"#666666"}
            fontWeight={400}
          >
            Clients
          </Heading>
          <Flex marginBottom={"20px"}>
            <Box>
              <Select bg={"white"}>
                <option value="show all">Show active</option>
                <option value="show active">Show archived</option>
                <option value="show inactive">Show all</option>
              </Select>
            </Box>
            <Box>
              <Input bg={"white"} placeholder="Search by name or email" />
            </Box>
          </Flex>
          <Flex marginBottom={"20px"}>
            <Input bg={"white"} placeholder="Add new client" />
            <Box>
              <Button backgroundColor={"#038fce"} color="white">
                ADD
              </Button>
            </Box>
          </Flex>
          <Box>
            <Flex border={"1px solid"} bg="#e4eaee">
              <Box width={"30%"} padding="10px 10px 10px 20px">
                NAME
              </Box>
              <Box padding="10px 0px">ADDRESS</Box>
            </Flex>
            {clients.clients.map((client) => {
              return (
                <Flex
                  bg="white"
                  padding={"5px"}
                  key={client.name}
                  borderLeft={"1px solid"}
                  borderRight={"1px solid"}
                  borderBottom={"1px solid"}
                >
                  <Box padding="0px 0px 0px 10px" width={"30%"}>
                    {client.name}
                  </Box>
                  <Box
                    borderLeft={"1px dashed"}
                    paddingLeft="10px"
                    width={"63%"}
                  >
                    {client.address}
                  </Box>
                  <Box
                    borderLeft={"1px dashed"}
                    paddingLeft="10px"
                    width={"70px"}
                  >
                    <EditClientModal />
                  </Box>
                  <Box
                    borderLeft={"1px dashed"}
                    paddingLeft="10px"
                    width={"70px"}
                  >
                    <DeleteClientModal
                      name={client.name}
                      handleDelete={() => handleDelete(client._id)}
                    />
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </Box>
      ) : isSmallerThan991 && isLargerThan173 ? (
        <Box backgroundColor={"#f2f6f8"} padding={"2.8572rem .7143rem"}>
          <Heading
            marginBottom={"40px"}
            fontSize="24px"
            color={"#666666"}
            fontWeight={400}
          >
            Clients
          </Heading>
          <Flex marginBottom={"20px"}>
            <Box>
              <Select bg={"white"}>
                <option value="show all">Show active</option>
                <option value="show active">Show archived</option>
                <option value="show inactive">Show all</option>
              </Select>
            </Box>
            <Box>
              <Input bg={"white"} placeholder="Search by name or email" />
            </Box>
          </Flex>
          <Flex marginBottom={"20px"}>
            <Input bg={"white"} placeholder="Add new client" />
            <Box>
              <Button backgroundColor={"#038fce"} color="white">
                ADD
              </Button>
            </Box>
          </Flex>
          <Box border={"1px solid"} bg="#e4eaee" padding="10px 10px 10px 20px">
            NAME & ADDRESS
          </Box>
          {clients.clients.map((client) => {
            return (
              <Box
                bg="white"
                padding={"5px"}
                key={client.name}
                borderLeft={"1px soild #C6D2D9"}
                borderRight={"1px solid #C6D2D9"}
                borderBottom={"4px solid #C6D2D9"}
              >
                <Box
                  padding="0px 0px 0px 10px"
                  borderBottom={"1px solid #C6D2D9"}
                  marginBottom="10px"
                >
                  <Box>{client.name}</Box>
                  <Box>
                    {"."}
                    {client.address}
                  </Box>
                </Box>
                <Flex>
                  <Box paddingLeft="10px" width={"50%"}>
                    <Center>
                      <EditClientModal />
                    </Center>
                  </Box>
                  <Box borderLeft={"1px dashed"} paddingLeft="10px">
                    <Center>
                      <DeleteClientModal
                        name={client.name}
                        handleDelete={() => handleDelete(client._id)}
                      />
                    </Center>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box backgroundColor={"#f2f6f8"} padding={"2.8572rem .7143rem"}>
          <Heading
            marginBottom={"40px"}
            fontSize="24px"
            color={"#666666"}
            fontWeight={400}
          >
            Clients
          </Heading>
          <Flex marginBottom={"20px"}>
            <Box>
              <Select bg={"white"}>
                <option value="show all">Show active</option>
                <option value="show active">Show archived</option>
                <option value="show inactive">Show all</option>
              </Select>
            </Box>
            <Box>
              <Input bg={"white"} placeholder="Search by name or email" />
            </Box>
          </Flex>
          <Input
            bg={"white"}
            marginBottom={"20px"}
            placeholder="Add new client"
          />
          <Box marginBottom={"20px"}>
            <Button backgroundColor={"#038fce"} color="white">
              ADD
            </Button>
          </Box>
          <Box border={"1px solid"} bg="#e4eaee" padding="10px 10px 10px 20px">
            NAME & ADDRESS
          </Box>
          {clients.clients.map((client) => {
            return (
              <Box
                bg="white"
                padding={"5px"}
                key={client.name}
                borderLeft={"1px solid"}
                borderRight={"1px solid"}
                borderBottom={"1px solid"}
              >
                <Box
                  padding="0px 0px 0px 10px"
                  borderLeft={"1px solid"}
                  borderRight={"1px solid"}
                  borderBottom={"thick solid"}
                >
                  <Box>{client.name}</Box>
                  <Box>{client.address}</Box>
                </Box>
                <Flex>
                  <Box paddingLeft="10px" width={"50%"}>
                    <EditClientModal />
                  </Box>
                  <Box borderLeft={"1px dashed"} paddingLeft="10px">
                    <DeleteClientModal
                      name={client.name}
                      handleDelete={() => handleDelete(client._id)}
                    />
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
  /*
  if(isLargerThan1365){
  return (
   
  );
  }

  if(isSmallerThan1365 && isLargerThan991){
    return (
      <Box backgroundColor={"#f2f6f8"} padding={"2.8572rem .7143rem"}>
        <Heading marginBottom={"40px"} fontSize="24px" color={"#666666"} fontWeight={400}>Clients</Heading>
        <Flex marginBottom={"20px"}>
            <Box>
              <Select bg={"white"}>
                <option value="show all">Show active</option>
                <option value="show active">Show archived</option>
                <option value="show inactive">Show all</option>
              </Select>
            </Box>
            <Box>
              <Input bg={"white"} placeholder="Search by name or email" />
            </Box>
          </Flex>
          <Flex marginBottom={"20px"}>
              <Input bg={"white"} placeholder="Add new client" />
            <Box>
              <Button backgroundColor={"#038fce"} color="white">
                ADD
              </Button>
            </Box>
          </Flex>
          <Box>
      <Flex border={"1px solid"} bg='#e4eaee'>
    <Box width={"30%"} padding="10px 10px 10px 20px">NAME</Box>
    <Box padding="10px 0px">ADDRESS</Box>
    </Flex>
        {clients.clients.map((client) => {
          return <Flex bg='white' padding={"5px"} key={client.name} borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
          <Box padding="0px 0px 0px 10px" width={"30%"}>{client.name}</Box>
          <Box borderLeft={"1px dashed"} paddingLeft="10px" width={"63%"}>
            {client.address}
          </Box>
          <Box borderLeft={"1px dashed"} paddingLeft="10px" width={"70px"}>
              <EditClientModal />
          </Box>
          <Box borderLeft={"1px dashed"} paddingLeft="10px" width={"70px"}>
            <DeleteClientModal name={client.name} handleDelete={() => handleDelete(client._id)} />
          </Box>
        </Flex>
        })}
      </Box>
        
      </Box>
    );
  }

  if(isSmallerThan991 && isLargerThan173){
    return (
      <Box backgroundColor={"#f2f6f8"} padding={"2.8572rem .7143rem"}>
        <Heading marginBottom={"40px"} fontSize="24px" color={"#666666"} fontWeight={400}>Clients</Heading>
        <Flex marginBottom={"20px"}>
            <Box>
              <Select bg={"white"}>
                <option value="show all">Show active</option>
                <option value="show active">Show archived</option>
                <option value="show inactive">Show all</option>
              </Select>
            </Box>
            <Box>
              <Input bg={"white"} placeholder="Search by name or email" />
            </Box>
          </Flex>
          <Flex marginBottom={"20px"}>
              <Input bg={"white"} placeholder="Add new client" />
            <Box>
              <Button backgroundColor={"#038fce"} color="white">
                ADD
              </Button>
            </Box>
          </Flex>
    <Box border={"1px solid"} bg='#e4eaee' padding="10px 10px 10px 20px">NAME & ADDRESS</Box>
        {clients.clients.map((client) => {
          return <Box bg='white' padding={"5px"} key={client.name} borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
          <Box padding="0px 0px 0px 10px">
            <Box>{client.name}</Box>
            <Box>{client.address}</Box>
          </Box>
          <Flex>
          <Box paddingLeft="10px" width={"50%"}>
              <EditClientModal />
          </Box>
          <Box borderLeft={"1px dashed"} paddingLeft="10px">
            <DeleteClientModal name={client.name} handleDelete={() => handleDelete(client._id)} />
          </Box>
          </Flex>
        </Box>
        })}
        
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
              {`ADD NEW MEMBER`}
            </Button>
          </Box>
      <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>{`Name & Address`}</Th>
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
*/
};
