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

    <Box width={"98.5vw"} mx="auto" boxSizing='border-box'>
   
     <Box backgroundColor={"white"} zIndex={"999"} top={"0px"} position={"sticky"}>   <NavbarHome /></Box>
    <SecondPart/>
     <ThirdPart/>

    <FourthPart/>
    <FifthPart/>
    <SixthPart/>
    <SeventhPart/>

    <EighthPart/> 
    <Footer/>

    </Box>
    
  )
}

export default Home