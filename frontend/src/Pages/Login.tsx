
import { Box, Button, Checkbox, Flex, FormLabel, Input, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/login/Login.css"
import { FcGoogle } from "react-icons/fc"
import LeftPart from "../Components/login/LeftPart";
import LoginNavbar from "../Components/login/LoginNavbar";

// import { login } from "../store/users/users.action";
import LoginFooter from "../Components/login/LoginFooter";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { login } from "../features/auth/authSlice";

type credsProp = {
  email: string;
  password: string;
}

const Login = () => {

  const isAuth = useAppSelector((store)=>store.authSlice.isAuth);
  const [loginCreds, setLoginCreds] = useState<credsProp>({email:"",password:""});

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
    dispatch(login(loginCreds));
  };

  const prevnavigate = () => { navigate("/tracker") }

  useEffect(() => {
    if (isAuth) { prevnavigate(); }
  }, [isAuth])

  return (
    <Flex bgColor="#f2f6f8">
      <Box w="68%">
        <LoginNavbar />
        <Box w="40%" margin="auto" bgColor="white" padding="2rem 2rem" marginTop="3rem" >
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
              />
              <StackDivider />
              <Input
                variant='outline'
                name="password"
                type="password"
                borderRadius="none"
                placeholder="Enter password"
                onChange={hanldeChange}
              />
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
              {/* <div style={{display:"flex",textAlign:"center",alignContent:"center"}}>
            <h1 style={{content: "",display: "block",background: "#C6D2D9",width: "100%",height: "1px"}}/>
            <span style={{fontSize: "1rem",fontWeight: "400",lineHeight:"1.5",color: "#333"}}>OR</span>
            <h1 style={{content: "",display: "block",background: "#C6D2D9",width: "100%",height: "1px"}}/>
          </div> */}
              <h3 style={{ width: "100%", textAlign: "center", borderBottom: "1px solid black", lineHeight: "1px" }}>
                <span style={{ background: "#fff", fontSize: ".95rem", padding: "0 .4rem" }}>OR</span>
              </h3>
              <StackDivider />
              <StackDivider />
              <Button leftIcon={<FcGoogle />} color="gray" borderRadius="none" bgColor="white" border="1px solid gray" _hover={{ bg: '#d4dbdd' }} > Continue with Google</Button>
            </Stack>

          </form>
        </Box>
        <Flex margin="auto" marginTop="3rem" justifyContent="center" >
          <LoginFooter />
        </Flex>
      </Box>
      <Box w="32%" className='login-left-part'>
        <LeftPart />
      </Box>
    </Flex>

  );
};

export default Login;
