import React from "react";
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
} from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit2, FiX } from "react-icons/fi";
import GroupsEditModal from "./GroupsEditModal";
import GroupsDeleteModal from "./GroupsDeleteModal";

const Groups = () => {
  return (
    <Box>
        <Flex alignItems={"end"}>
          <Box>
            <Input placeholder="Add new user group" />
          </Box>
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
              <Th>Groups</Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>NAME</Td>
              <Td>ACCESS</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>Group 1</Td>
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
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Groups;
