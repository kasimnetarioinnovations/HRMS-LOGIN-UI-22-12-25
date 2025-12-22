import React from "react";
import munc_logo from "../assets/munc.png";
import { Link } from "react-router-dom";
import { BiKey } from "react-icons/bi";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const PhoneVerification = () => {
     const navigate = useNavigate();
          const handleSubmit = () => {
        navigate("/organization-setup");
      };
  return (
    <div className="phone-verification-container">
      <div
        className="phone-verification"
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
              Phone Verification
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                color: "#8D8D8D",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Enter the OTP sent to your phone number to complete verification.
            </p>
          </div>
        </div>
            
        <form action=""  style={{display:"flex", flexDirection:"column", gap:"16px", justifyContent:"center", alignItems:"center",  width:"571px"}}>
          <label
            htmlFor=""
            style={{ display: "flex", justifyContent: "space-between" , width:"571px"}}
          >
            <div
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "400",
                color: "#AAAAAA",
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <BiKey /> Enter OTP
            </div>{" "}
             <div>
                 <Link
              style={{
                textDecoration: "none",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                color: "#0084FF",
              }}
            >
              Resend in 30s
            </Link>
             </div>
          </label>
          <div style={{display:"flex", gap:"9px"}}>
            <input
              className="outline"
              type="text"
              style={{
                border: "1px solid #A2A8B8",
                outline: "none",
                width: "87px",
                height: "88px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            />
             <input
              className="outline"
              type="text"
              style={{
                border: "1px solid #A2A8B8",
                outline: "none",
                width: "87px",
                height: "88px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            />
             <input
              className="outline"
              type="text"
              style={{
                border: "1px solid #A2A8B8",
                outline: "none",
                width: "87px",
                height: "88px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            />
             <input
              className="outline"
              type="text"
              style={{
                border: "1px solid #A2A8B8",
                outline: "none",
                width: "87px",
                height: "88px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            />
             <input
              className="outline"
              type="text"
              style={{
                border: "1px solid #A2A8B8",
                outline: "none",
                width: "87px",
                height: "88px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            />
             <input
              className="outline"
              type="text"
              style={{
                border: "1px solid #A2A8B8",
                outline: "none",
                width: "87px",
                height: "88px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            />
           
          </div>
          <button
          onClick={handleSubmit}
            style={{
              fontFamily: "Inter",
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
              backgroundColor: "#0084FF",
              borderRadius: "8px",
              width: "571px",
              padding: "12px 16px",
              border: "none",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneVerification;
