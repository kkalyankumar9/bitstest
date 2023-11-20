import { Box, Button, Flex, HStack, Heading,Text, Input } from '@chakra-ui/react'
import React from 'react'
import {  Icon,Link } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const AboveFooterPart = () => {
   const data1= ["BITSAT" ,"Admission", "Career", "News", "Events", "AQARs", "NIRF", "DATA" ,"Outreach"];
   const data2=["Important Links",
  "  Policies & Procedures",
    "Academics",
   "Research & Innovation",
   " Downloads",
    "Contacts",
    "Pilani",
   " Goa",
    "Hyderabad",
  "  Dubai"]
  return (
    <>
    <Box>
        <Flex align={"center"} justify={"space-between"} p={5} flexWrap={"wrap"}>
            <Box>
                <Heading size={"lg"} textAlign={"left"}> SUBSCRIBE</Heading>
                <HStack> 
                    <Input w={"300px"} placeholder='Email ID '/>
                    <Button bgColor={"red"} color={"white"} _hover={{bgColor:"blue"}}>Send</Button>
                </HStack>

            </Box>
            <Box  border={"1px solid red"} p={1}>
                <Heading size={"md"} color={"red"}>AN INSTITUTE OF EMINENCE</Heading>
            </Box>
            <Box>
                <Heading size={"md"} color={"#1A237E"}textAlign={"left"} mb={5}>FOLLOW US</Heading>
                <HStack spacing={4} color={"red"}>
      <Link  _hover={{bgColor:"red"}} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaFacebook} boxSize={6} />
      </Link>

      <Link  _hover={{bgColor:"red"}} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaLinkedin} boxSize={6} />
      </Link>

      <Link _hover={{bgColor:"red"}} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaInstagram} boxSize={6} />
      </Link>

      <Link  _hover={{bgColor:"red"}} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaYoutube} boxSize={6} />
      </Link>

      <Link  _hover={{bgColor:"red"}} href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaTwitter} boxSize={6} />
      </Link>
    </HStack>

            </Box>
        </Flex>
        <br />
        <HStack borderTop={"1px"} p={5}>
            {data1?.map((e,i)=>(
                <Text key={i} p={5} color={"#7E57C2"} _hover={{color:"red"}}>{e}</Text>
            ))}
        </HStack>
        <HStack borderTop={"1px"} p={3}>
            {data2?.map((e,i)=>(
                <Heading key={i} p={1} color={"#1A237E"} _hover={{color:"red"}} size={"sm"}>{e}</Heading>
            ))}
        </HStack>

    </Box>
    </>
  )
}

export default AboveFooterPart