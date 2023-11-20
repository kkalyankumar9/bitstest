import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const stylingdata=
    {
        display: 'flex',

    
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
       right:"0px",
    
        width: '100%',
        backgroundColor: 'white',
        marginTop:"0px",
        padding:"25px",
        _hover:{color: '#FF5733', backgroundColor: 'red' },
        gap:"25px"
    // Adjust the zIndex as needed
      }

const Admission = () => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter= () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.contains || !event.relatedTarget.contains(event.currentTarget)) {
      setIsDropdownOpen(false);
    }
  };
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const handleMouseEnter1= () => {
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
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const handleMouseEnter3= () => {
    setIsDropdownOpen3(true);
  };

  const handleMouseLeave3 = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.contains || !event.relatedTarget.contains(event.currentTarget)) {
      setIsDropdownOpen3(false);
    }
  };

  return (
    <>
    <Box
      style={{
        display: 'flex',
    
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
       right:"0px",
      
        width: '100%',
        backgroundColor: 'white',
        marginTop:"36px",
        padding:"25px",
        fontSize:"20px",
        
        

    // Adjust the zIndex as needed
      }}
    >
     
     
       
       <Box   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} position="relative">
       <Heading size={"md"} color={"rgb(2,3,129)"}  _hover={{color:"red"}} ><Link>On Campus: Pilani, Goa & Hyderabad</Link>   </Heading>
            <Box>
            {isDropdownOpen && <Integrated />}
            </Box>
          </Box>
          <Box    onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} position="relative">
          <Heading size={"md"} color={"rgb(2,3,129)"}  _hover={{color:"red"}}>  <Link>Work Integrated Learning Program</Link>   </Heading>
            <Box>
            {isDropdownOpen1 && <WorkIntegrated />}
            </Box>
          </Box>
          <Box    onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} position="relative">
          <Heading size={"md"} color={"rgb(2,3,129)"}  _hover={{color:"red"}} ><Link>Online Programme</Link>   </Heading>
            <Box>
            {isDropdownOpen2 && <Online />}
            </Box>
          </Box>
          <Box   onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} position="relative">
            <Heading size={"md"} color={"rgb(2,3,129)"}  _hover={{color:"red"}} ><Link >On Campus: Dubai</Link></Heading>
            <Box>
            {isDropdownOpen3 && <OnCampus />}
            </Box>
          </Box>
      

             
   
 
      
 
    </Box>
   
  </>
    
  );
};

const Integrated=()=>{
    return<>
      <Box
      style={stylingdata}
  
      >
            <Text _hover={{color:"red"}} ><Link to="/integrated-first-degree">Integrated First Degree</Link></Text>
            <Text _hover={{color:"red"}} >Higher Degree (HD) Program </Text>
            <Text _hover={{color:"red"}} >Doctoral Program (Ph.D.)</Text>

        </Box>

    </>
}
const WorkIntegrated=()=>{
    return<>
      <Box
      style={stylingdata
        
      }
      
      >
            <Text  _hover={{color:"red"}} >Programmes For Individuals </Text>
            <Text  _hover={{color:"red"}} >Corporate Collaborations</Text>
           

        </Box>

    </>
}
const Online=()=>{
    return<>
      <Box
      style={stylingdata}
    
      >
            <Text  _hover={{color:"red"}} >B.Sc Computer Science </Text>
          
           

        </Box>

    </>
}
const OnCampus=()=>{
    return<>
      <Box
      style={stylingdata}
     
      >
          <Link> <Text  _hover={{color:"red"}} >Bachelor Of Engineering</Text></Link> 
           <Link>  <Text _hover={{color:"red"}} > Master Of Engineering </Text></Link>
           <Link>   <Text _hover={{color:"red"}} > Master Of Business Administration</Text></Link>
           <Link>   <Text _hover={{color:"red"}} > Doctor Of Philosophy</Text></Link>
          
           

        </Box>

    </>
}


 


export default Admission;
