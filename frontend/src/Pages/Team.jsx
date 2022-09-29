import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import Members from "../Components/team/Members";
import Groups from "../Components/team/Groups";
import Reminders from "../Components/team/Reminders";

const Team = () => {
  return (
    <div>
      <Tabs variant="enclosed-colored">
        <TabList>
          <Tab>Members</Tab>
          <Tab>Groups</Tab>
          <Tab>Reminders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box
              borderLeft={"1px solid"}
              borderRight={"1px solid"}
              borderBottom={"1px solid"}
            >
              <Members />
            </Box>
          </TabPanel>
          <TabPanel>
            <Groups />
          </TabPanel>
          <TabPanel>
            <Reminders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Team;
