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
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { getUser } from "../../features/users/usersSlice";
import BillableModal from "./BillableModal";

const Members = () => {
  const [item, setItem] = useState(false)
  const token = useAppSelector(store => store.authSlice.token)
    const user = useAppSelector(store => store.usersSlice.user)
    const [userid, email, p] = token.trim().split(":")
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUser({ token: token, id: userid }))
        console.log(user);
    }, [])

    // const SplitName = user?.name.split(" ")
  const [isLargerThan1365, isSmallerThan1365] = useMediaQuery([
    '(min-width: 1365px)', 
    '(max-width: 1365px)',
  ])

  if(isLargerThan1365){
  return (
    <Box>
      <Flex>
        <Flex>
          <Box>
            <Select>
              <option value="show all">Show all</option>
              <option value="show active">Show active</option>
              <option value="show inactive">Show inactive</option>
            </Select>
          </Box>
          <Box>
            <Input placeholder="Search by name or email" />
          </Box>
        </Flex>
        <Spacer />
        <Box>
          <Button backgroundColor={"#038fce"} color="white">
            ADD NEW MEMBER
          </Button>
        </Box>
      </Flex>
      <Box bg={"#e4eaee"} padding="10px 20px">
                  Members
                  </Box>
                  <Flex border={"1px solid"} bg='white'>
    <Box width={"20%"} padding="10px 10px 10px 20px">NAME</Box>
    <Box width={"18%"} padding="10px 0px">EMAIL</Box>
    <Box width={"20%"} padding="10px 0px">BILLABLE RATE (USD)</Box>
    <Box width={"19%"} padding="10px 0px">ROLE</Box>
    <Box width={"20%"} padding="10px 0px">GROUP</Box>
    </Flex>
    <Flex>
    <Box width={"20%"} padding="10px 10px 10px 20px">{user.name}</Box>
              <Box width={"18%"} padding="10px 0px">{user.email}</Box>
              <Box width={"20%"} padding="10px 0px">
                <Flex>
                  
                    <Button padding={"20px"} variant='ghost' backgroundColor="#f2f6f8" isDisabled>-</Button>
                  
                  <Button variant='ghost'>
                      <BillableModal />
                  </Button>
                </Flex>
              </Box>
              <Box width={"20%"} padding="10px 0px">
                <Box>
                  <Button
                    backgroundColor="#03a9f4"
                    color="white"
                    variant="outline"
                  >
                    Owner
                  </Button>
                </Box>
              </Box>
              <Box width={"20%"} padding="10px 0px">Group</Box>
              <Box width={"50px"} padding="10px 0px">
                <Button>
                  <FiMoreVertical />
                </Button>
              </Box>
    </Flex>
      {/* <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Members</Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>NAME</Td>
              <Td>EMAIL</Td>
              <Td>BILLABLE RATE (USD)</Td>
              <Td>ROLE</Td>
              <Td>GROUP</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>Ravishankar Kumar (you)</Td>
              <Td>rp120896@gmail.com</Td>
              <Td>
                <Flex>
                  <Box
                    backgroundColor={"#f2f6f8"}
                    padding={"10px 20px"}
                    fontSize="30px"
                    border={"solid 1px #C6D2D9"}
                  >
                    -
                  </Box>
                  <Box>
                    <Button>
                      <BillableModal />
                    </Button>
                  </Box>
                </Flex>
              </Td>
              <Td>
                <Box>
                  <Button
                    backgroundColor="#03a9f4"
                    color="white"
                    variant="outline"
                  >
                    Owner
                  </Button>
                </Box>
              </Td>
              <Td>Group</Td>
              <Td>
                <Button>
                  <FiMoreVertical />
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer> */}
    </Box>
  );
  }

  if(isSmallerThan1365){
    return (
      <Box>
        
          <Flex marginBottom={"10px"}>
            <Box>
              <Select>
                <option value="show all">Show all</option>
                <option value="show active">Show active</option>
                <option value="show inactive">Show inactive</option>
              </Select>
            </Box>
            
              <Input placeholder="Search by name or email" />
            
          </Flex>
          
          <Box textAlign={"right"}>
            <Button backgroundColor={"#038fce"} color="white">
              ADD NEW MEMBER
            </Button>
          </Box>
          <Box bg={"#e4eaee"} padding="5px 10px" border={"1px solid"}>
                  Members
                  </Box>
                  <Flex padding={"10px"} borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
                    <Box width={"95%"}>Name</Box>
                    <Box>
                      <Button background={"#E1F5FE"} onClick={()=> setItem(!item)}>{item?<RiArrowDropUpLine fontSize={"30px"} />:<RiArrowDropDownLine fontSize={"30px"} />}</Button>
                      </Box>
                  </Flex>
                  {item?<Flex padding={"10px"} borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
                    <Box width={"95%"}>{user.name}</Box>
                    <Box>
                      <Button background={"#E1F5FE"} onClick={()=> setItem(!item)}><RiArrowDropUpLine fontSize={"30px"} /></Button>
                      </Box>
                  </Flex>:<Box padding={"10px"} borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
                  <Flex>
                    <Box width={"95%"}>{user.name}</Box>
                    <Box>
                      <Button background={"#E1F5FE"} onClick={()=> setItem(!item)}><RiArrowDropDownLine fontSize={"30px"} /></Button>
                      </Box>
                  </Flex>
                  <Box bg={"#e4eaee"}>
                    <Flex border={"1px solid"}>
                      <Box width={"50%"} padding="10px">EMAIL</Box>
                      <Box borderLeft={"1px dashed"} padding="10px">{user.email}</Box>
                    </Flex>
                    <Flex borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
                      <Box width={"50%"} padding="10px">BILLABLE RATE</Box>
                      <Box borderLeft={"1px dashed"} padding="10px">
                      <Flex>
                  
                  <Button padding={"20px"} variant='ghost' backgroundColor="#f2f6f8" isDisabled>-</Button>
                
                <Button variant='ghost'>
                    <BillableModal />
                </Button>
              </Flex>
                      </Box>
                    </Flex>
                    
                      <Box padding="10px" borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>COST RATE</Box>
                      
                    <Flex borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
                      <Box width={"50%"} padding="10px">ROLE</Box>
                      <Box borderLeft={"1px dashed"} padding="10px">
                      <Button
                    backgroundColor="#03a9f4"
                    color="white"
                    variant="outline"
                  >
                    Owner
                  </Button>
                      </Box>
                    </Flex>
                    <Flex borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
                      <Box width={"50%"} padding="10px">GROUP</Box>
                      <Box borderLeft={"1px dashed"} padding="10px">Group</Box>
                    </Flex>
                    <Flex borderLeft={"1px solid"} borderRight={"1px solid"} borderBottom={"1px solid"}>
                      <Box width={"95%"} padding="10px">EDIT</Box>
                      <Box borderLeft={"1px dashed"} padding="10px">
                      <Button>
                  <FiMoreVertical />
                </Button>
                      </Box>
                    </Flex>
                  </Box>
                    </Box>}
        {/* <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>NAME</Td>
                <Td>
                  <Box textAlign={"right"}>
                  <RiArrowDropDownLine fontSize={"35px"}/>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>Ravishankar Kumar (you)</Td>
                <Td>
                  <Box textAlign={"right"}>
                  <RiArrowDropDownLine fontSize={"35px"} />
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer> */}
      </Box>
    );
    }
};

export default Members;
