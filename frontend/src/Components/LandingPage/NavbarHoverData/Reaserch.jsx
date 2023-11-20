
import { Box } from '@chakra-ui/react';
import React from 'react'
const researchTopics = [
    'Overview',
    'Centers',
    'Funded Projects',
    'Research Based Consultancy',
    'Contacts',
    'Patents',
    'Research Lab',
    'Publications',
    'Core Contacts'
  ];
  

  
  const Reaserch = () => {
    return (
      <>
       <Box style={{  gap: '10px', padding: '20px' }} position={"fixed"} bgColor={"white"}>
        {researchTopics.map((program, index) => (
          <Box key={index} _hover={{ color: '#FF5733' }} display={"flex"} style={{ padding: '10px',  borderRadius: '8px' ,textAlign:"left"}}>
            {program}
          </Box>
        ))}
      </Box>
      
      </>
    )
  }
  
  export default Reaserch