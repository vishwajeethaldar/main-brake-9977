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

const Members = () => {
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
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>To convert</Th>
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
                    <Button colorScheme="#C6D2D9" variant="outline">
                      Change
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
              <Td>GROUP</Td>
              <Td>...</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Members;
