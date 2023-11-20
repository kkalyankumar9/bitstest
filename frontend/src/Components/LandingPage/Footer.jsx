import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <Flex justify={"space-between"}  borderTop={"1px"} m={"10px"}>
        <Box><Image src="https://www.bits-pilani.ac.in/wp-content/themes/betheme-child/assets/images/f_bg.jpg"/></Box>
        <Box textAlign="center" mt="4">
      <Text>
        An Institution Deemed to be University estd. vide Sec.3 of the UGC 
      </Text>
      <Text>
      Act, 1956 under notification # F.12-23/63.U-2 of Jun 18, 1964  
        </Text>
      <Text>
        <Link href="#privacy-policy" mr="2">
          Privacy Policy
        </Link>
        |{' '}
        <Link href="#terms-and-conditions" ml="2">
          Terms and Conditions
        </Link>
      </Text>
      <Text>
        © 2023 BITS Pilani | Contact us:{' '}
        <Link href="mailto:webmaster@pilani.bits-pilani.ac.in">webmaster@pilani.bits-pilani.ac.in</Link>
      </Text>
    </Box>
    </Flex>
    </>
  )
}

export default Footer