import React, {useState} from "react";
import munc_logo from "../assets/munc.png";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
     const [otpSent, setOtpSent] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));


 const handleSubmit = (e) => {
  e.preventDefault();

  if (!otpSent) {
    // 👉 SEND OTP API
    setOtpSent(true);
  } else {
    // 👉 VERIFY OTP API
    const finalOtp = otp.join(""); // "123456"
    console.log("Verify OTP:", finalOtp);

    // ✅ OTP verified → redirect
    navigate("/set-newpassword");
  }
};

  const handleOtpChange = (value, index) => {
  if (!/^[0-9]?$/.test(value)) return;

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  // auto focus next box
  if (value && index < 5) {
    document.getElementById(`otp-${index + 1}`).focus();
  }
};

const handleOtpBackspace = (e, index) => {
  if (e.key === "Backspace" && !otp[index] && index > 0) {
    document.getElementById(`otp-${index - 1}`).focus();
  }
};

    const navigate = useNavigate();
        const handleSetNewPass = () => {
      navigate("/set-newpassword");
    };

  return (
    <div className="forgot-passowrd-container">
      <div
        className="forgot-password"
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "769px",
          padding: "40px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          className="login-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img src={munc_logo} alt="{munc_logo" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <h1
              style={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              Forgot Password
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                color: "#8D8D8D",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Enter your email to get a reset link and set a new password.
            </p>
          </div>
          <form
          onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
               {!otpSent && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "400px",
              }}
            >
              <label
                htmlFor=""
                style={{
                  fontFamily: "Inter",
                  color: "#1C1A1A",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Email/Phone No.
              </label>
              <div
                className="outline"
                style={{
                  backgroundColor: "#FBFBFB",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E4E4E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <IoKeyOutline  style={{ fontSize: "20px", color: "#BABABA" }} />
                <input
                  value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="login-input"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                  }}
                  type="email"
                  placeholder="Email/Phone"
                />
              </div>
            </div>
             )}

              {/* OTP INPUT */}
           {otpSent && (
  <div
    style={{
      width: "400px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    }}
  >
    <label
      style={{
        fontFamily: "Inter",
        color: "#1C1A1A",
        fontSize: "14px",
        fontWeight: "400",
      }}
    >
      Enter OTP
    </label>

    <div style={{ display: "flex", gap: "10px" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleOtpChange(e.target.value, index)}
          onKeyDown={(e) => handleOtpBackspace(e, index)}
          className="outline login-input"
          style={{
            width: "52px",
            height: "52px",
            textAlign: "center",
            fontSize: "18px",
            borderRadius: "8px",
            border: "1px solid #E4E4E4",
            backgroundColor: "#FBFBFB",
            outline: "none",
          }}
        />
      ))}
    </div>
  </div>
)}


            <button
             type="submit"
           
              style={{
                fontFamily: "Inter",
                color: "white",
                fontWeight: "500",
                fontSize: "16px",
                backgroundColor: "#0084FF",
                borderRadius: "8px",
                width: "400px",
                padding: "12px 16px",
                border: "none",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
               {otpSent ? "Verify Code" : "Send OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
