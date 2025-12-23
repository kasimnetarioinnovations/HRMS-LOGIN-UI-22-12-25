import React from "react";
import "./Style.css";
import munc_logo from "../assets/munc.png";
import { useNavigate } from "react-router-dom";

const OrganizationSetup = () => {
   const navigate = useNavigate();
            const handleSubmit = () => {
          navigate("/account-setup");
        };
  return (
    <div className="oraganisation-setup-container">
      <div
        className="oraganisation-setup"
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
          className="oraganisation-setup-content"
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
              Organization Setup
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                color: "#8D8D8D",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Enter your organization details to customize features and
              settings.
            </p>
          </div>
        </div>

        <form
          className="login-form"
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              Company Name
            </label>
           
              <input
                className="login-input"
                style={{
                   backgroundColor: "#FBFBFB",
                  padding: "12px 16px",
                  borderRadius: "8px",
                 border: "1px solid #E4E4E4",
                  outline: "none",
                  height:"20px"
                  
                }}
                type="text"
                disabled
                placeholder="Input Fields"
              />
          </div>

          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
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
              Company Address
            </label>
              <input
                className="login-input"
                style={{
                   backgroundColor: "#FBFBFB",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #E4E4E4",
                  outline: "none",
                    height:"20px"
                }}
                type="text"
                  disabled
                placeholder="Street Address"
              />

              
              <input
                className="login-input"
                style={{
                   backgroundColor: "#FBFBFB",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #E4E4E4",
                  outline: "none",
                    height:"20px"
                 
                 
                }}
                type="text"
                disabled
                placeholder="Apartment Suit,etc"
              />
             
            </div>


           
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
              State
            </label>
          
              <input
                className="login-input"
                style={{
                 backgroundColor: "#FBFBFB",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #E4E4E4",
                  outline: "none",
                    height:"20px"
                }}
                type="text"
                disabled
                placeholder="State"
              />
              {/* <select name="" id=""  style={{
                 backgroundColor: "#FBFBFB",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #E4E4E4",
                  outline: "none",
                  color:"#BABABA",
                  fontFamily:"Inter",
                      fontSize:"16px",
                      fontWeight: 400,
                }} disabled>
                  <option value="">Select State</option>
                  <option value="">Select State</option>
                  <option value="">Select State</option>
              </select> */}
            {/* </div> */}
          </div>
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
              City
            </label>
           
              <input
                className="login-input"
                style={{
                  backgroundColor: "#FBFBFB",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #E4E4E4",
                  outline: "none",
                    height:"20px"
                 
                }}
                type="password"
                disabled
                placeholder="City"
              />
           
          </div>
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
              Zip Code
            </label>
          
              <input
                className="login-input"
                style={{
                 backgroundColor: "#FBFBFB",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #E4E4E4",
                  outline: "none",
                    height:"20px"
                 
                }}
                type="password"
                disabled
                placeholder="Zip Code"
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
              width: "400px",
              padding: "12px 16px",
              border: "none",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationSetup;
