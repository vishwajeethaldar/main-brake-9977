import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  InputGroup,
  InputRightAddon,
  Image,
} from '@chakra-ui/react'
import {AiFillEye} from 'react-icons/ai'
import { Box, Button, Checkbox, Flex, FormLabel, Input, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/login/Login.css"
import { FcGoogle } from "react-icons/fc"
import LeftPart from "../Components/login/LeftPart";
import LoginNavbar from "../Components/login/LoginNavbar";
import load from "../../public/loader.gif"
// import { login } from "../store/users/users.action";
import LoginFooter from "../Components/login/LoginFooter";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { login } from "../features/auth/authSlice";
import loader from '/Curve-Loading.gif'
type credsProp = {
  email: string;
  password: string;
}

const Login = () => {
  const [passlen, setPasslen] = useState<boolean>(true)
  const isAuth = useAppSelector((store) => store.authSlice.isAuth);
  const Auth = useAppSelector((store) => store.authSlice);
  const [loginCreds, setLoginCreds] = useState<credsProp>({ email: "", password: "" });
  const [changeType, setChangeType] =  useState<boolean>(false)
  const navigate = useNavigate();
  // const { state } = useLocation();
  const dispatch = useAppDispatch();

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(loginCreds.password.length>=8){
        setPasslen(true)
        dispatch(login(loginCreds));
      }else{
        setPasslen(false)
      }
  };

  const prevnavigate = () => { navigate("/tracker") }

  useEffect(() => {
    if (isAuth) { prevnavigate(); }
  }, [isAuth])

  return (
    <Flex direction={["column", "column", "row", "row"]} bgColor="#f2f6f8">
      <Box w={["100%", "100%", "68%", "68%"]}>
        <LoginNavbar />
        <Box w={["82%", "65%", "50%", "40%"]} margin="auto" bgColor="white" padding={["1rem 1rem", "1rem 1rem", "1.6rem 1.6rem", "2rem 2rem"]} marginTop="3rem" >
          <form onSubmit={handleSubmit} >
            <FormLabel>Log In</FormLabel>
            <Stack direction="column">
              <Input
                variant='outline'
                name="email"
                type="email"
                borderRadius="none"
                placeholder="Enter email"
                onChange={hanldeChange}
                required
              />
              <StackDivider />
              <InputGroup border={!(passlen)?"1px solid red":"none"} borderRadius={"7px"}>
              <Input
                variant='outline'
                name="password"
                type={changeType?"text":"password"}
                borderRadius="none"
                placeholder="Enter password"
                onChange={hanldeChange}
                required
              />
              <InputRightAddon _hover={{cursor:"pointer"}} children={<AiFillEye />}  onClick={()=>setChangeType(!changeType)}/>
              </InputGroup>
              <StackDivider />
              <Flex justifyContent="space-between" fontSize="xs">
                <Flex>
                  <Checkbox /><Text marginLeft=".5rem">Stay logged in</Text>
                </Flex>
                <Box><Text color="#03a9f4" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Forgot password?</Text></Box>
              </Flex>
              <StackDivider />
              <Button type="submit" color="white" borderRadius="0" bgColor="#03a9f4" _hover={{ bg: '#0482bb' }}>Login</Button>
              <StackDivider />
              <StackDivider />
        
              <h3 style={{ width: "100%", textAlign: "center", borderBottom: "1px solid black", lineHeight: "1px" }}>
                <span style={{ background: "#fff", fontSize: ".95rem", padding: "0 .4rem" }}>OR</span>
              </h3>
              <StackDivider />
              <StackDivider />
              <Button leftIcon={<FcGoogle />} color="gray" borderRadius="none" bgColor="white" border="1px solid gray" _hover={{ bg: '#d4dbdd' }} > Continue with Google</Button>

              {Auth.error?<Box w="100%">
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>Incorrect UserId or Password</AlertDescription>
              </Alert>
              </Box>:null}

              {Auth.isAuth?<Box w="100%">
              <Alert status='success'>
                <AlertIcon />
                <AlertTitle> Success</AlertTitle>
                <AlertDescription>Logged in Successfully</AlertDescription>
              </Alert>
              </Box>:null}
            </Stack>

          </form>
        </Box>
        <Flex margin="auto" marginTop="3rem" justifyContent="center" >
          <LoginFooter />
        </Flex>
      </Box>
      <Box w={["100%", "100%", "32%", "32%"]} className='login-left-part'>
        <LeftPart />
      </Box>
      {/* { Auth.loading?
        <Box w="100%" h="100%" background= "linear-gradient(144deg, rgba(0,212,255,1) 0%, rgba(73,9,121,0.4822303921568627) 95%)"  position="absolute" top="0" left="0" zIndex="999">
        <Box position="absolute" top="47vh" left="47vw" zIndex="9999">
          <img src={load} alt="loader" />
      </Box>
      </Box>:null
      } */}

    {Auth.loading?
      <Flex w="100vw" h={"100vh"} mx={"auto"} align={"center"} justify={"center"} bg={"rgba(245,250,254,.5)"} backgroundBlendMode={"hard-light"} position={"absolute"} top={"0"} left={"0"}>
          <Image src={loader} />
      </Flex>:null}
    </Flex>

  );
};

export default Login;
