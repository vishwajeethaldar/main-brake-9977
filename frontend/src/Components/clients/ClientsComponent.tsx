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
import React from "react";
import { FiMoreVertical, FiEdit2 } from "react-icons/fi";

const ClientsComponent = () => {
  return (
    <Box>
      <Flex>
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
        <Spacer />
        <Flex>
          <Box>
            <Input placeholder="Search by name or email" />
          </Box>
          <Box>
            <Button backgroundColor={"#038fce"} color="white">
              ADD NEW MEMBER
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
};

export default ClientsComponent;
