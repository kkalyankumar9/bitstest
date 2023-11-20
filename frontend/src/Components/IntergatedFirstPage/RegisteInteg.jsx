import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react';

const RegisterInteg = () => {
  const data = { name: "", mobile_no: "", location: "", course: "", branch: "" };
  const [regDetail, setRegDetails] = useState(data);

  const goBack = () => {
    window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(regDetail);
    // Add your logic for form submission or API call here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Heading>Application Registration</Heading>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter Full Name" name="name" value={regDetail.name} onChange={handleChange} />
        <FormLabel>Mobile No</FormLabel>
        <Input placeholder="Enter Mobile No" name="mobile_no" value={regDetail.mobile_no} onChange={handleChange} />
        <FormLabel>Location</FormLabel>
        <Select placeholder="Location" name="location" value={regDetail.location} onChange={handleChange}>
          <option value={"pilani"}>Pilani</option>
          <option value={"goa"}>Goa</option>
          <option value={"hyderabad"}>Hyderabad</option>
          <option value={"dubai"}>Dubai</option>
        </Select>
        <FormLabel>Course</FormLabel>
        <Select placeholder="Course" name="course" value={regDetail.course} onChange={handleChange}>
          <option value={"BE"}>BE</option>
          <option value={"b-pharm"}>B.Pharm</option>
          <option value={"M.Sc"}>M.Sc</option>
          <option value={"General Studies"}>General Studies</option>
        </Select>
        <FormLabel>Branch</FormLabel>
        <Input placeholder="Enter Branch" name="branch" value={regDetail.branch} onChange={handleChange} />
        <Button type="submit" bgColor="teal" color="white">
          Register
        </Button>
      </FormControl>
      <Button onClick={goBack} p={2} mt={4}>
        Back
      </Button>
    </Box>
  );
};

export default RegisterInteg;
