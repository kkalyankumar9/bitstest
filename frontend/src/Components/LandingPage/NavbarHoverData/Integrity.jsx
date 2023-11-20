import React from 'react';
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Integrity = () => {
  const integratedData = [
    'B.E. (Chemical)',
    'B.E. (Civil)',
    'B.E. (Civil)',
    'B.E. (Computer Science)',
    'B.E. (Electrical And Electronics)',
    'B.E. (Electronics And Communication)',
    'B.E. (Electronics And Instrumentation)',
    'B.E. (Manufacturing Engineering)',
    'B.E. (Mechanical)',
    'B.Pharma.',
    'M.Sc (Gen Studies)',
    'M.Sc. (Biological Sciences)',
    'M.Sc. (Chemistry)',
    'M.Sc. (Economics)',
    'M.Sc. (Mathematics)',
    'M.Sc. (Physics)',
  ]; // Your integrated degree data array

  return (
    <>
    <Box  position={"fixed"} mt={"40px"} P={5} boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
      <Flex justify={"space-evenly"} fontSize={"20px"} color={"#001F3F"}  P={5}  gap={"25p"}>
        <Box _hover={{ color: '#FF5733' }} position="relative">
          <Link to="/integrated-first-degree" style={{ textDecoration: 'none' }}>
            <ChakraLink >INTEGRATED FIRST DEGREE</ChakraLink>
          </Link>
        </Box>
        {/* Add similar links for other categories */}
        <Box _hover={{ color: '#FF5733' }}>
          <Link to="/doctoral" style={{ textDecoration: 'none' }}>
            <ChakraLink>Doctoral Programmes</ChakraLink>
          </Link>
        </Box>
        <Box _hover={{ color: '#FF5733' }}>
          <Link to="/wilp" style={{ textDecoration: 'none' }}>
            <ChakraLink>WILP</ChakraLink>
          </Link>
        </Box>
        <Box _hover={{ color: '#FF5733' }}>
          <Link to="/dubai-academics" style={{ textDecoration: 'none' }}>
            <ChakraLink>Dubai Academics</ChakraLink>
          </Link>
        </Box>
      </Flex>

      <Box style={{  gap: '10px', padding: '20px' }}>
        {integratedData.map((program, index) => (
          <Box key={index} _hover={{ color: '#FF5733' }} display={"flex"} style={{ padding: '10px',  borderRadius: '8px' ,textAlign:"left"}}>
            {program}
          </Box>
        ))}
      </Box>
      </Box>
    </>
  );
};

export default Integrity;
