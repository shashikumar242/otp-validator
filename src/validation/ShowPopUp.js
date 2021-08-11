import React, { useEffect } from "react";
import "./ShowPopUp.css";

export default function ShowPopUp({
  open,
  otp,
  handleOpen,
  handleChange,
  handleAutoFill,
}) {
  useEffect(() => {
    async function paste() {
      const text = await navigator.clipboard.readText();
      const arr = text.split("");
      console.log("useEfffffffffffect", arr);
      arr.map((item, index) => handleAutoFill(item, index));
    }

    paste();
  }, []);

  const handleVerify = () => {
    let flag = true;
    for (let i = 0; i < otp.length; i++) {
      if (otp[i] === "") {
        flag = false;
        break;
      }
    }

    if (flag) {
      alert("Your OTP has been Verified");
    } else {
      alert("Please fill all the Inputs");
    }
  };

  return (
    <>
      {open && (
        <div className="container">
          <div className="content">
            <h2>Phone Verification</h2>

            <h3 style={{ fontWeight: "400" }}>
              Enter the OTP you received on 967646XXXX
            </h3>

            <div
              id="input-container"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {otp.map((data, index) => {
                return (
                  <input
                    className="otp-field"
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>

            <div>
              <button className="change-reset-btns">Change Number</button>
              <button className="change-reset-btns">Resend-OTP</button>
            </div>

            <div>
              <button className="verify-btn" onClick={handleVerify}>
                Verify Phone Number
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
