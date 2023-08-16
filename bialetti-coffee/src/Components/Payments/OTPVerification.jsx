import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

const OTPVerification = ({ isOpen, onClose, onVerify }) => {
  const [otp, setOtp] = useState("");
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const handleVerify = () => {
    // In a real-world scenario, you would make an API request to verify the OTP.
    // For this example, let's assume the correct OTP is '123456'.
    const correctOTP = "123456";

    if (otp === correctOTP) {
      // OTP is correct, set OTP verification status and call onVerify callback
      setIsOTPVerified(true);
      onVerify();
    } else {
      // OTP is incorrect, handle accordingly (e.g., show error message)
      console.log("Incorrect OTP");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Verify OTP</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleVerify}>
            Verify OTP
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OTPVerification;