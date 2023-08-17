import React, { useState } from "react";
import {
  ChakraProvider,
  Container,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import UserDetails from "./UserDetails";
import PaymentDetails from "./PaymentDetails";
import OTPVerification from "./OTPVerification";
import ThankYouPage from "./ThankYouPage";

function Payment()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });



  const [showOtpModal, setShowOtpModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (updatedData) => {
    setFormData({ ...formData, ...updatedData });
  };

  const handleSendOTP = () => {
    // Implement OTP sending logic here
    console.log("Sending OTP...");
    // Simulate OTP sending and show the modal
    setShowOtpModal(true);
  };

  const handleVerifyOTP = () => {
    // Implement OTP verification success logic here
    console.log("OTP Verified!");
    // Simulate successful OTP verification and show ThankYouPage
    setShowOtpModal(false);
    setOrderPlaced(true);
  };

  return (
    <ChakraProvider>
      <div className="container">
        <Heading as="h1" className="heading">
          Payment Page
        </Heading>
        {orderPlaced ? (
          <ThankYouPage />
        ) : (
          <>
            <Flex className="flex-container">
              <UserDetails formData={formData} onChange={handleInputChange} />
              <PaymentDetails
                formData={formData}
                onChange={handleInputChange}
              />
            </Flex>
            <Button  id = "sendOtp" className="payment-button" onClick={handleSendOTP} >
              Send OTP
            </Button>
{/* 
            <input type="submit"  value={"Send OTP"} id = "sendOtp" className="payment-button" onClick={handleSendOTP} /> */}
            <OTPVerification
              isOpen={showOtpModal}
              onClose={() => setShowOtpModal(false)}
              onVerify={handleVerifyOTP}
            />
          </>
        )}
      </div>
    </ChakraProvider>
  );
};

export default Payment