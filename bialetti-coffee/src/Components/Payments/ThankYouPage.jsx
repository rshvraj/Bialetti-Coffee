import React from "react";
import { Box, Heading, Link, Button } from "@chakra-ui/react";
import images2 from "./Images/succesfull.gif";

const ThankYouPage = () => {
  return (
    <div className="thankyou-container">
      <Box className="thankyoubox">
        <Heading as="h1">Thank You for Your Order!</Heading>
        <Heading as="h5" className="successPlaced">
          Your Order has Successfully Placed
        </Heading>
        <p>OrderId:- #15Bfares16</p>
        <img src={images2} alt="Thank You GIF" />
        <Button
          className="Thankyoubutton"
          bgColor={"#3182ce"}
          color={"white"}
          display={"inline-block"}
        >
          <Link href="/">Home Page</Link>
        </Button>
      </Box>
    </div>
  );
};

export default ThankYouPage;