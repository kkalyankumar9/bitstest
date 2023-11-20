import React, { useState } from 'react';
import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import AcademicProgramsRow from './NavbarHoverData/Academics';
import Integrity from './NavbarHoverData/Integrity';
import Reaserch from './NavbarHoverData/Reaserch';
import PosterSlide from './PosterSlide';
import Footer from './Footer';
import MiddlePart from './MiddlePart';
import AboveFooterPart from './AboveFooterPart';
import Admission from './NavbarHoverData/Admission';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.contains || !event.relatedTarget.contains(event.currentTarget)) {
      setIsDropdownOpen(false);
    }
  };
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsDropdownOpen1(true);
  };

  const handleMouseLeave1 = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.contains || !event.relatedTarget.contains(event.currentTarget)) {
      setIsDropdownOpen1(false);
    }
  };
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleMouseEnter2= () => {
    setIsDropdownOpen2(true);
  };

  const handleMouseLeave2 = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.contains || !event.relatedTarget.contains(event.currentTarget)) {
      setIsDropdownOpen2(false);
    }
  };
  return (
    <>
    <Box position={'sticky'} top={0} zIndex={0} >
      <Flex  color={'white'} p={'7px'} w={'100%'} gap={'25px'} bgColor={'red'} justify={'flex-end'} align={'center'} textAlign={'end'}>
        <Box>
          <ChakraLink>OLD WEBSITE</ChakraLink>
        </Box>
        <Box>
          <ChakraLink>ABOUT</ChakraLink>
        </Box>
        <Box>
          <ChakraLink>WILP</ChakraLink>
        </Box>
        <Box>
          <ChakraLink>PLACEMENTS</ChakraLink>
        </Box>
        <Box>
          <ChakraLink>BITSAT</ChakraLink>
        </Box>
        <Box>
          <ChakraLink>PRACTICE SCHOOL</ChakraLink>
        </Box>
        <Box>
          <ChakraLink>CAREER</ChakraLink>
        </Box>
        <Box>
          <ChakraLink>INTERNATIONALIZATION</ChakraLink>
        </Box>
        <Box>
          <SearchIcon />
        </Box>
      </Flex>

      <Box  display={'flex'} justifyContent={'space-evenly'} bg={'white'} boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.1)'}>
        <Box>
          <Image src="https://www.bits-pilani.ac.in/wp-content/uploads/bits-pillani-2.png" />
        </Box>
        <Flex align={'center'} gap={5} justify={'center'}  >
          <Box>
            <ChakraLink>HOME</ChakraLink>
          </Box>
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} position="relative">
            <ChakraLink>ACADEMICS</ChakraLink>
            <Box>
            {isDropdownOpen && <Integrity />}
            </Box>
          </Box>
          <Box onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} position="relative">
            <ChakraLink>ADMISSION</ChakraLink>
            <Box 
          
            >
            {isDropdownOpen2 && <Admission />}
            </Box>
          </Box>
          <Box onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} position="relative">
            <ChakraLink>RESEARCH & INNOVATION</ChakraLink>
            {isDropdownOpen1 && <Reaserch />}
          </Box>
         
          <Box>
            <ChakraLink>DEPARTMENT</ChakraLink>
          </Box>
          <Box>
            <ChakraLink>FACULTY</ChakraLink>
          </Box>
          <Box>
            <ChakraLink>STUDENTS</ChakraLink>
          </Box>
          <Box>
            <ChakraLink>ALUMNI</ChakraLink>
          </Box>
          <Box>
            <ChakraLink>EXPLORE</ChakraLink>
          </Box>
        </Flex>
      </Box>
      </Box>
      <Box>
      <PosterSlide/>
      <br />
      <MiddlePart/>
      <br />
      <AboveFooterPart/>
      <Footer/>
      <Link to={"/integrated-first-degree"}>data</Link>
      </Box>
    </>
  );
};

export default Navbar;
