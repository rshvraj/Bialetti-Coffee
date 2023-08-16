import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Grid,
  Button,
} from "@chakra-ui/react";

const UserDetails = ({ formData, onChange }) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("User details submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
         required />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
         required />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.mobile}>
          <FormLabel>Mobile Number</FormLabel>
          <Input
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            type="tel"
            placeholder="Mobile Number"
        required  />
          <FormErrorMessage>{errors.mobile}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.address}>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
         required />
          <FormErrorMessage>{errors.address}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.pinCode}>
          <FormLabel>Pin Code</FormLabel>
          <Input
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
            type="tel"
            placeholder="Pin Code"
         required />
          <FormErrorMessage>{errors.pinCode}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.city}>
          <FormLabel>City</FormLabel>
          <Input
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
         required />
          <FormErrorMessage>{errors.city}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.state}>
          <FormLabel>State</FormLabel>
          <Input
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="State"
         required />
          <FormErrorMessage>{errors.state}</FormErrorMessage>
        </FormControl>
      </div>
     
    </form>
  );
};

export default UserDetails;
