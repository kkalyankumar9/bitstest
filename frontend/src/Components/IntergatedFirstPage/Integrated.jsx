import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AboveFooterPart from '../LandingPage/AboveFooterPart'
import Footer from '../LandingPage/Footer'
import RegisteInteg from './RegisteInteg'

const Integrated = () => {
  const navigate=useNavigate("")
  const handleClick=()=>{
    navigate("/regintegrated")

  }
  return (
    <>
    <Box bgColor={"#385170"} color={"white"}  _hover={{bgColor:"red"}} textAlign={"left"} p={5}fontSize={"15px"}><Link >OVERVIEW</Link></Box>
    <Box>
        <Heading size={"2xl"} p={5}>
        Integrated First Degree
        </Heading>
        <Text p={5} fontSize={"lg"}>Birla Institute of Technology & Science (BITS), Pilani a leading Institute of Higher Education and a deemed University under section 3 of the UGC act offering degree programmes in Engineering, Sciences, Technology, Pharmacy, Management and Humanities. This web site describes the admission modalities for the on-campus degree programmes offered at Pilani campus, Goa Campus and Hyderabad Campus of BITS, Pilani.</Text>
    </Box>
    <Flex className="app" justify={"space-evenly"} p={8} flexWrap={"wrap"} >
      {data.campuses.map((campus, index) => (
        <Box key={index} className="campus-card" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px">
          <Heading size={"md"} color={"red"}>{campus.location}</Heading>
          <Box className="programs-list">
            {Object.entries(campus.programs).map(([program, courses]) => (
              <Box key={program} className="program" p={8}  borderRight={"1px solid gray"} >
                <Heading color={"#385170"}>{program}</Heading>
                <ul >
                  {courses.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Flex>
    <br />
    <Button onClick={handleClick}>Registration</Button>
   
    <AboveFooterPart/>
      <Footer/>
    </>
  )
}

export default Integrated

const data={
  "campuses": [
    {
      "location": "Pilani",
      "programs": {
        "BE": [
          "Chemical Engg.",
          "Civil Engg.",
          "Computer Science",
          "Electrical & Electronics Engg.",
          "Electrical & Instrumentation Engg.",
          "Electronics & Communications",
          "Mechanical Engg.",
          "Manufacturing Engg.",
          "Biotechnology"
        ],
        "B.Pharm.": [
          "Pharmacy"
        ],
        "M.Sc.": [
          "Biological Sciences",
          "Chemistry",
          "Economics",
          "Mathematics",
          "Physics"
        ],
        "General Studies": [
          "General Studies"
        ]
      }
    },
    {
      "location": "Goa",
      "programs": {
        "BE": [
          "Chemical Engg.",
          "Civil Engg.",
          "Computer Science",
          "Electrical & Electronics Engg.",
          "Electrical & Instrumentation Engg.",
          "Electronics & Communications",
          "Mechanical Engg.",
          "Manufacturing Engg.",
          "Biotechnology"
        ],
        "B.Pharm.": [
          "Pharmacy"
        ],
        "M.Sc.": [
          "Biological Sciences",
          "Chemistry",
          "Economics",
          "Mathematics",
          "Physics"
        ],
        "General Studies": [
          "General Studies"
        ]
      }
    },
    {
      "location": "Hyderabad",
      "programs": {
        "BE": [
          "Chemical Engg.",
          "Civil Engg.",
          "Computer Science",
          "Electrical & Electronics Engg.",
          "Electrical & Instrumentation Engg.",
          "Electronics & Communications",
          "Mechanical Engg.",
          "Manufacturing Engg.",
          "Biotechnology"
        ],
        "B.Pharm.": [
          "Pharmacy"
        ],
        "M.Sc.": [
          "Biological Sciences",
          "Chemistry",
          "Economics",
          "Mathematics",
          "Physics"
        ],
        "General Studies": [
          "General Studies"
        ]
      }
    },
    {
      "location": "Dubai",
      "programs": {
        "BE": [
          "Chemical Engg.",
          "Civil Engg.",
          "Computer Science",
          "Electrical & Electronics Engg.",
          "Electrical & Instrumentation Engg.",
          "Electronics & Communications",
          "Mechanical Engg.",
          "Manufacturing Engg.",
          "Biotechnology"
        ],
        "B.Pharm.": [
          "Pharmacy"
        ],
        "M.Sc.": [
          "Biological Sciences",
          "Chemistry",
          "Economics",
          "Mathematics",
          "Physics"
        ],
        "General Studies": [
          "General Studies"
        ]
      }
    }
  ]
}

