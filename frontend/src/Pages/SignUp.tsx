import { Box, Button, Checkbox, Flex, FormLabel, Image, Input, InputGroup, InputRightAddon, Stack, StackDivider, Text } from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import {AiFillEye} from 'react-icons/ai'
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc';
import AppNavbar from '../Components/App_Bars/AppNavbar';
import CompactAppSidebar, {ExpandedAppSidebar } from '../Components/App_Bars/AppSidebar';
import LoginFooter from '../Components/login/LoginFooter';
import SignUpNavbar from '../Components/signup/SignupNavbar';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { addUser } from '../features/users/usersSlice';
import load from "../../public/loader.gif"
import { useNavigate } from 'react-router-dom';
import loader from '/Curve-Loading.gif'
type SignCredProp = {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [changeType, setChangeType] =  useState<boolean>(false)
  // const [isOpen,setIsOpen] = useState<boolean>(false);
  const [passlen, setPasslen] = useState<boolean>(true)
  //   const Open:Function=()=>{setIsOpen(!isOpen)}

  const Auth = useAppSelector((store) => store.usersSlice);
  const Auth2 = useAppSelector((store) => store.authSlice);


  const [signupcreds, setSignupCred] = useState<SignCredProp>({ name: "", email: "", password: "" });
  const dispatch = useAppDispatch();

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupCred({
      ...signupcreds,
      [name]: value,
    });
  };
  
  const navigate =useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(signupcreds.password.length>=8){
      setPasslen(true)
      dispatch(addUser(signupcreds));
      setTimeout(()=>{
        return (!Auth.error)?navigate("/login"): navigate("/signup")
      }, 3000)
    }else{
      setPasslen(false)
    }
   
  };

  return (
   
    <Box bgColor="#f2f6f8" >
      <SignUpNavbar />
      <Box>
        <Stack>
          <Text fontSize="2.4rem" textAlign="center" color="#333333" fontWeight="500" >Get started with Clockify</Text>
          <StackDivider />
          <Text marginX="3.2rem" textAlign="center" color="#4f4b4b" fontSize="1.26rem" fontWeight="500" >Create a free account to start tracking time and supercharge your productivity.
          </Text>
          <StackDivider />
          <Text fontSize="xs" textAlign="center" color="#6b6969" >
            No credit card required · Unsubscribe at any time
          </Text>
        </Stack>
        
      </Box>
      <Box w={["82%","40%","35%","35%"]} margin="auto" bgColor="white" padding={["1rem 1rem","1rem 1rem","2rem 2rem","2rem 2rem"]} marginTop="3rem" >
        <form onSubmit={handleSubmit}>
          <FormLabel>Sign Up</FormLabel>
          <Stack direction="column">
            <Input
              variant="outline"
              name="name"
              type="text"
              borderRadius="none"
              placeholder="Enter Full name"
              onChange={hanldeChange} required />
            <StackDivider />
            <Input
              variant="outline"
              name="email"
              type="email"
              borderRadius="none"
              placeholder="Enter email"
              onChange={hanldeChange} required/>
            <StackDivider />
            <InputGroup  border={!(passlen)?"1px solid red":"none"} borderRadius={"7px"}>
            <Input
              variant="outline"
              name="password"
              type={changeType?"text":"password"}
              borderRadius="none"
              placeholder="Enter password"
              onChange={hanldeChange} required/>
              <InputRightAddon children={<AiFillEye/>} _hover={{cursor:"pointer"}} onClick={()=>setChangeType(!changeType)} />
            </InputGroup>
            <StackDivider />
            <Flex fontSize="xs">
              <Checkbox /><Text marginLeft=".5rem">I agree to the </Text><Text color="#03a9f4" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Terms of Use</Text>
            </Flex>
            <StackDivider />
            <Button type="submit" color="white" borderRadius="0" bgColor="#03a9f4" _hover={{ bg: '#0482bb' }}>SignUp</Button>
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
                <AlertTitle>Registration Failed</AlertTitle>
                <AlertDescription>{Auth.errmsg}</AlertDescription>
              </Alert>
              </Box>:null}
              {Auth.error?<Box w="100%">
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Registration Failed</AlertTitle>
                <AlertDescription>{Auth.errmsg}</AlertDescription>
              </Alert>
              </Box>:null}
            
              {!passlen?<Box w="100%">
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle></AlertTitle>
                <AlertDescription>Password Length must be 8 Characters Long</AlertDescription>
              </Alert>
              </Box>:null}

          </Stack>
        </form>
      </Box>
      <Flex margin="auto" marginTop="3rem" justifyContent="center" >
        <LoginFooter />
      </Flex>
     
      {Auth.loading?
      <Flex w="100vw" h={"100vh"} mx={"auto"} align={"center"} justify={"center"} bg={"rgba(245,250,254,.5)"} backgroundBlendMode={"hard-light"} position={"absolute"} top={"0"} left={"0"}>
          <Image src={loader}/>
      </Flex>:null}
    </Box>
  )
}

export default SignUp