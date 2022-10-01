import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { getTasks } from "../../features/tasks/tasksSlice";
import Default from "./Default";
import { Timer_dashboard } from "./Timer_dashboard";
import Timer_Task_Display from "./Timer_Task_Display";
import { task } from "./Task_Search_Box";
import AppNavbar from "../App_Bars/AppNavbar";
import CompactAppSidebar, { ExpandedAppSidebar } from "../App_Bars/AppSidebar";
const Timer_Tracker = () => {
  const [showDefault, setDefault] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const token = useAppSelector((store) => store.authSlice.token);
  const tasks = useAppSelector((store) => store.tasksSlice.tasks);
  const [control, setControl] = useState<Function[]>([]);
  const [updatedTask, setUpdateTask] = useState<task>({});
  const [total, setTotal] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const Open: Function = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(getTasks({ token: token }));
  }, []);
  useEffect(() => {
    tasks.forEach((el) => {
      setTotal((prev) => prev + el.endTime);
    });
  }, [tasks]);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (tasks.length > 0) {
      setDefault(false);
    } else {
      setDefault(true);
    }
  });
  const handleProps = (
    setType: Function,
    handleStart: Function,
    setUpdate: Function
  ) => {
    setControl([setType, handleStart, setUpdate]);
  };
  const handleUpdateId = (task: task) => {
    setUpdateTask(task);
  };
  return (
    <Box>
      <AppNavbar Open={Open} />
      <Flex position={"relative"}>
        <Box display={["none","none","block","block"]}>{isOpen ? <ExpandedAppSidebar /> : <CompactAppSidebar />}</Box>
        <Box bg={"white"} height={"100%"} position={"absolute"} top="0px" zIndex={"5"} display={["block","block","none","none"]}>{isOpen ? <ExpandedAppSidebar /> : <CompactAppSidebar />}</Box>
        <Box
          minH={"100vh"}
          width={"100vw"}
          bg={"#f2f6f8"}
          paddingLeft="30px"
          paddingRight={"30px"}
          paddingTop="50px"
          paddingBottom={"50px"}
        >
          <Timer_dashboard
            updatedTask={updatedTask}
            handleProps={handleProps}
            show={show}
            setShow={setShow}
          />
          <Box onClick={() => setShow(false)}>
            {showDefault ? (
              <Default />
            ) : (
              <Timer_Task_Display
                total={total}
                handleUpdateId={handleUpdateId}
                setUpdate={control[2]}
                setType={control[0]}
                handleStart={control[1]}
                tasks={tasks}
              />
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Timer_Tracker;
