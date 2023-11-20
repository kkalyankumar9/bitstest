import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, FormControl, HStack, Heading, Input, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MiddlePart = () => {
    
const options = [
    'B.E. (Chemical)',
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
  ];
  return (
    <>
    <Flex p={"10px"} >
        <Box  w={"60%"}>
            <Heading size={"lg"}>WHAT ARE YOU HERE FOR?</Heading>
            <HStack  w={"80%"}>
            <Heading size={"sm"}>
      I want to 
    </Heading>
    <Input  border={"none"}  borderBottom={"1px solid red"}/>
    <ArrowForwardIcon color={"red"}/>
            </HStack>
            <Flex flexWrap="wrap" gap={"10px"} p={8} > 
      <Box flexBasis={{ base: "40%"}} _hover={{bgColor:"red",color:"white"}} border={"2px solid gray"} borderRadius={"10px"}  p={2}>
        <Text>Know Courses Offered</Text>
      </Box>
      <Box flexBasis={{ base: "40%" }} _hover={{bgColor:"red",color:"white"}}  border={"2px solid gray"} borderRadius={"10px"}  p={2}>
        <Text>Register for BITSAT</Text>
      </Box>
      <Box flexBasis={{ base: "50%" }} _hover={{bgColor:"red",color:"white"}}  border={"2px solid gray"} borderRadius={"10px"}  p={2}>
        <Text>Know About Faculty</Text>
      </Box>
      <Box flexBasis={{ base: "40%" }}_hover={{bgColor:"red",color:"white"}}   border={"2px solid gray"} borderRadius={"10px"}  p={2}>
        <Text>See Campuses</Text>
      </Box>
      <Box flexBasis={{ base: "40%" }}_hover={{bgColor:"red",color:"white"}}  border={"2px solid gray"} borderRadius={"10px"}  p={2}>
        <Text>Know Admission Deadlines</Text>
      </Box>
    </Flex>
   
        </Box>
        <Box bgColor="black" color="white" w="40%" p={5} borderRadius="md">
      <Heading size="lg" mb={5}>
        FIND THE RIGHT PROGRAMME
      </Heading>
      <FormControl w="80%" m="auto">
        <Select mb={5} placeholder="Select Campus">
          <option value="pilani">Pilani</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="dubai">Dubai</option>
          <option value="birla_gao">K K Birla Gao</option>
        </Select>
        <Select mb={5} placeholder="Select Academics">
          <option value="integrated">INTEGRATED FIRST DEGREE</option>
          <option value="higherdegree">Higher Degree</option>
          <option value="doctoral">Doctoral Programmes</option>
        </Select>
        <Select placeholder="Select an option" mb={5}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Button colorScheme="teal">Submit</Button>
      </FormControl>
    </Box>


    </Flex>
      <Flex color="white" h={{ base: 'auto', md: '155px' }} direction={{ base: 'column', md: 'row' }} > 
        <Box _hover={{bgColor:"gray"}} bgColor="blue" w={{ base: '100%', md: '25%' }} p="4" textAlign={{ base: 'center', md: 'left' }} justifyContent="center">
          <Heading size="lg">KEEP EXPLORING</Heading>
        </Box>
        <Box bgColor="skyblue" _hover={{bgColor:"gray"}} w={{ base: '100%', md: '25%' }} p="4" textAlign={{ base: 'center', md: 'left' }} justifyContent="center">
          <Heading size="lg">FACULTY</Heading>
        </Box>
        <Box bgColor="red" _hover={{bgColor:"gray"}} w={{ base: '100%', md: '25%' }} p="4" textAlign={{ base: 'center', md: 'left' }} justifyContent="center">
          <Heading size="lg">EVENTS</Heading>
        </Box>
        <Box bgColor="gold" _hover={{bgColor:"gray"}} w={{ base: '100%', md: '25%' }} p="4" textAlign={{ base: 'center', md: 'left' }} justifyContent="center">
          <Heading size="lg">NEWS</Heading>
        </Box>
      </Flex>
    </>
  );
};

export default MiddlePart;
