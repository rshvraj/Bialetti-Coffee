import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Grid,

} from "@chakra-ui/react";
import images1 from './Images/cardsLogo.png';


const PaymentDetails = ({ formData, onChange }) => {
  const [errors, setErrors] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Get price from local storage
    const storedPrice = localStorage.getItem("price");
    if (storedPrice) {
      setPrice(parseFloat(storedPrice));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.cardHolderName) {
      newErrors.cardHolderName = "Card holder name is required";
      valid = false;
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card number is required";
      valid = false;
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
      valid = false;
    }

    if (!formData.expiry) {
      newErrors.expiry = "Expiry date is required";
      valid = false;
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Invalid expiry date (MM/YY)";
      valid = false;
    }

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required";
      valid = false;
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "Invalid CVV";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Payment details submitted:", formData);
      // You can perform further actions here, such as sending data to a server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="price-section">
          <h1>Price: INR {price.toFixed(2)}</h1>
        </div>
        <div className="inputBox">
          <span>Card accepted :</span>
          <img src={images1} alt="" />
        </div>

        <FormControl isInvalid={!!errors.cardHolderName}>
          <FormLabel>Card Holder Name</FormLabel>
          <Input
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleInputChange}
            placeholder="Card Holder Name"
          />
          <FormErrorMessage>{errors.cardHolderName}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.cardNumber} mt={4}>
          <FormLabel>Card Number</FormLabel>
          <Input
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="Card Number"
          />
          <FormErrorMessage>{errors.cardNumber}</FormErrorMessage>
        </FormControl>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
          <FormControl isInvalid={!!errors.expiry}>
            <FormLabel>Expiry Date (MM/YY)</FormLabel>
            <Input
              name="expiry"
              value={formData.expiry}
              onChange={handleInputChange}
              placeholder="MM/YY"
           required />
            <FormErrorMessage>{errors.expiry}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.cvv}>
            <FormLabel>CVV</FormLabel>
            <Input
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
            />
            <FormErrorMessage>{errors.cvv}</FormErrorMessage>
          </FormControl>
        </Grid>
      </div>
      {/* Add other form fields here */}
      {/* ... */}
    </form>
  );
};

export default PaymentDetails;
