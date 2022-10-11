import NavbarHome from "../Components/Navbar/NavbarHome"
import SecondPart from '../Components/Homepage/SecondPart'
import ThirdPart from '../Components/Homepage/ThirdPart'
import FourthPart from '../Components/Homepage/FourthPart'
import FifthPart from '../Components/Homepage/Fifthpart'
import SixthPart from '../Components/Homepage/SixthPart'
import SeventhPart from '../Components/Homepage/SeventhPart'
import EighthPart from '../Components/Homepage/EighthPart'
import { Box } from '@chakra-ui/react'
import Footer from '../Components/Homepage/Footer'


const Home = () => {
  return (

    <Box width={"100%"} mx="auto" boxSizing='border-box'>
   
     <Box backgroundColor={"white"} zIndex={"999"} top={"0px"} position={"sticky"} w="100%">   
        <NavbarHome />
     </Box>
      <Box w="100%" mx="auto">
          <SecondPart/>  
          <ThirdPart/>
          <FourthPart/>
          <FifthPart/> 
          <SixthPart/>
          <SeventhPart/>
          <EighthPart/>  
      </Box> 
      <Footer/>  
    </Box>
    
  )
}

export default Home