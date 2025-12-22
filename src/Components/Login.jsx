import React from "react";
import "./Style.css";
import munc_logo from "../assets/munc.png";
import { MdOutlineMail } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";
import { Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div
        className="login"
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
            gap:"20px"
          }}
        >
          <img src={munc_logo} alt="{munc_logo" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap:"5px"
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
              Login to your Account
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                color: "#8D8D8D",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Welcome back! Please enter your details.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#BABABA",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            <hr style={{ width: "328px", backgroundColor: "#E4E4E4", height:"1px", border:"none" }} />
            Or
            <hr style={{ width: "328px",  backgroundColor: "#E4E4E4", height:"1px", border:"none" }} />
          </div>
        </div>
        <form className="login-form" action="" style={{display:"flex", flexDirection:"column", gap:"16px", justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"4px" ,width:"400px"}}>
              <label htmlFor="" style={{fontFamily:"Inter",color:"#1C1A1A", fontSize:"14px", fontWeight:"400"}} >Email/Phone No.</label>
               <div className="outline" style={{backgroundColor:"#FBFBFB",padding:"12px 16px", borderRadius:"8px", border:"1px solid #E4E4E4", display:"flex", alignItems:"center", gap:"10px"}}>
                  <MdOutlineMail  style={{fontSize:"20px", color:"#BABABA"}}/>
                 <input className="login-input" style={{border:"none", outline:"none", width:"100%", height:"100%", backgroundColor:"transparent"}} type="email" placeholder="Enter Your Email" />
               
               </div>
            </div>
             <div style={{display:"flex", flexDirection:"column", gap:"4px",width:"400px"}}>
              <label htmlFor="" style={{fontFamily:"Inter",color:"#1C1A1A", fontSize:"14px", fontWeight:"400"}} >Password</label>
               <div className="outline" style={{backgroundColor:"#FBFBFB",padding:"12px 16px", borderRadius:"8px", border:"1px solid #E4E4E4", display:"flex", alignItems:"center", gap:"10px"}}>
                  <TfiLock style={{fontSize:"20px", color:"#BABABA", fontWeight:"bolder"}}/>
                 <input className="login-input" style={{border:"none", outline:"none", width:"100%", height:"100%", backgroundColor:"transparent"}} type="password" placeholder="Password" />
               
               </div>
               <label htmlFor="" style={{display:"flex", justifyContent:"space-between"}}><span style={{fontFamily:"Inter", fontSize:"14px",fontWeight:"400", color:"#AAAAAA" ,display:"flex", alignItems:"center", gap:"3px"}}><input type="checkbox"/>Remember Me</span> <Link  style={{textDecoration:"none",  fontFamily:"Inter", fontWeight:"400", fontSize:"14px", color:"#0084FF"}}>Forgot Password?</Link></label>
            </div>
  
                <button style={{fontFamily:"Inter", color:"white", fontWeight:"500", fontSize:"16px", backgroundColor:"#0084FF", borderRadius:"8px", width:"400px", padding:"12px 16px", border:"none", textAlign:"center", cursor:"pointer"}}>Login</button>
            
             <label htmlFor=""><span style={{fontFamily:"Inter",fontSize:"14px", fontWeight:"400px", color:"#000000"}}>Don’t have an Account ? </span><Link to="/create-account" style={{fontFamily:"Inter",fontSize:"14px", fontWeight:"400px", textDecoration:"none", color:"#0084FF"}}>Create an Account.</Link></label>

             <label htmlFor="" style={{fontFamily:"Inter", fontSize:"14px", fontWeight:"400",color:"#868D94" }}>Designed & Developed by Kasper Infotech Pvt. Ltd.</label>
             
        </form>
      </div>
    </div>
  );
};

export default Login;
