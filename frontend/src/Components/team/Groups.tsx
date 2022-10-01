import React, { ChangeEvent, useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit2, FiX } from "react-icons/fi";
import GroupsEditModal from "./GroupsEditModal";
import GroupsDeleteModal from "./GroupsDeleteModal";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { getGroups, addGroups } from "../../features/groups/groupsSlice";

const Groups = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((store) => store.groupsSlice);
  const auth = useAppSelector((store) => store.authSlice);
  const [group, setGroup] = useState<string>("")
  const [userId, email, password] = auth.token.split(":");

  const [isLargerThan1365, isSmallerThan1365, isLargerThan195, isSmallerThan195] = useMediaQuery([
    '(min-width: 1365px)', 
    '(max-width: 1365px)',
    '(min-width: 195px)', 
    '(max-width: 195px)'
  ])

  useEffect(()=>{
    dispatch(getGroups({token:auth.token}));
    dispatch(addGroups({token:auth.token, data:{name:"fvdgdfvdxfgdfgvdfdfgv", userId:userId}}));
    
    console.log(groups.groups);
    console.log(email)
    console.log(group)
  }, []);

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setGroup(e.target.value)
  }


  if(isLargerThan1365){
  return (
    <Box>
        <Flex justifyContent={"right"} marginBottom={"20px"}>
          <Box>
            <Input value={group} onChange={onChange} placeholder="Add new user group" />
          </Box>
          <Box>
          <Button backgroundColor={"#038fce"} color="white">
            ADD
          </Button>
        </Box>
        </Flex>
        <Box bg={"#e4eaee"} padding="5px 10px">
                  Groups
                  </Box>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>NAME</Td>
              <Td>ACCESS</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            {groups.groups.map((group) => {
          return <Tr key={group.name}>
          <Td>{group.name}</Td>
          <Td>
            <Flex>
              <AiOutlinePlusCircle />
              <p>Access</p>
            </Flex>
          </Td>
          <Td>
              <GroupsEditModal />
          </Td>
          <Td>
            <GroupsDeleteModal />
          </Td>
        </Tr>
        })}
              
            
            
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
  }

  if(isSmallerThan1365 && isLargerThan195){
    return (
      <Box>
          <Flex marginBottom={"20px"}>
              <Input placeholder="Add new user group" />
            <Box>
            <Button backgroundColor={"#038fce"} color="white">
              ADD
            </Button>
          </Box>
          </Flex>
          <Box bg={"#e4eaee"} padding="5px 10px">
                  Groups
                  </Box>
        <TableContainer>
          <Table variant="simple">
            
            <Tbody>
              <Tr>
                <Td>ACCESS</Td>
                <Td>
                  <Box textAlign={"right"}>
                  <RiArrowDropDownLine />
                  </Box>
                </Td>
              </Tr>
                <Tr>
                <Td>
                
                    Groups
                    
                </Td>
                <Td>
                  <Box textAlign={"right"}>
                  <RiArrowDropDownLine />
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
    }

    if(isSmallerThan195){
      return (
        <Box>
                <Input placeholder="Add new user group" />
              <Box>
              <Button backgroundColor={"#038fce"} color="white" marginBottom={"20px"}>
                ADD
              </Button>
            </Box>
            <Box bg={"#e4eaee"} padding="5px 10px">
                  Groups
                  </Box>
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>ACCESS</Td>
                  <Td>
                    <Box textAlign={"right"}>
                    <RiArrowDropDownLine />
                    </Box>
                  </Td>
                </Tr>
                  <Tr>
                  <Td>Group 1</Td>
                  <Td>
                    <Box textAlign={"right"}>
                    <RiArrowDropDownLine />
                    </Box>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      );
      }
};

export default Groups;
