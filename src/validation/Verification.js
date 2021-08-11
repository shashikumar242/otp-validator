import React, { useState } from "react";
import "./styles.css";
import ShowPopUp from "./ShowPopUp";

const Verification = () => {
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));


  const handleChange = (event, index) => {
    console.log("eventtt", event.nativeEvent.inputType);
    if (isNaN(event.target.value)) return false;

    setOtp([
      ...otp.map((d, idx) => {
        return idx === index ? event.target.value : d;
      }),
    ]);

    //Focus Next
    if (event.nativeEvent.inputType === "insertText" && index !== 5) {
      event.target.nextSibling.focus();
    } else if (
      event.nativeEvent.inputType === "deleteContentBackward" &&
      index !== 0
    ) {
      event.target.previousSibling.focus();
    }
  };



  const handleOpen = () => {
    setOpen(!open);
  };



  const handleAutoFill = (value, index) => {
    console.log("AutttoooooooooFillllllllll");

    setOtp([
      ...otp.map((d, idx) => {
        return idx === index ? value : d;
      }),
    ]);

    console.log("Autofill------otp-------", otp);
  };


  return (
    <div>
      {!open && (
        <button className="generate-btn" onClick={handleOpen}>
          Generate--OTP
        </button>
      )}

      <ShowPopUp
        open={open}
        otp={otp}
        handleOpen={handleOpen}
        handleChange={handleChange}
        handleAutoFill={handleAutoFill}
      />
    </div>
  );
};

export default Verification;
