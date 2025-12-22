import React from 'react'
import "./Style.css";
import munc_logo from "../assets/munc.png";
import { MdOutlineMail } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";
import { GoPerson } from "react-icons/go";
import { PiPhoneCallLight } from "react-icons/pi";
import { Link} from "react-router-dom";



const OrganizationSetup = () => {
    
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
          className="oraganisation-setup"
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
              Enter your organization details to customize features and settings.
            </p>
          </div>
        </div>
          
            <form className="login-form" action="" style={{display:"flex", flexDirection:"column", gap:"16px", justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"4px" ,width:"400px"}}>
              <label htmlFor="" style={{fontFamily:"Inter",color:"#1C1A1A", fontSize:"14px", fontWeight:"400"}} >Company Name</label>
               <div className="outline" style={{backgroundColor:"#FBFBFB",padding:"12px 16px", borderRadius:"8px", border:"1px solid #E4E4E4", display:"flex", alignItems:"center", gap:"10px"}}>
                  <GoPerson  style={{fontSize:"20px", color:"#BABABA"}}/>
                 <input className="login-input" style={{border:"none", outline:"none", width:"100%", height:"100%", backgroundColor:"transparent"}} type="text" placeholder="Input Fields" />
               
               </div>
            </div>
             <div style={{display:"flex", flexDirection:"column", gap:"4px",width:"400px"}}>
              <label htmlFor="" style={{fontFamily:"Inter",color:"#1C1A1A", fontSize:"14px", fontWeight:"400"}} >Company Address</label>
               <div className="outline" style={{backgroundColor:"#FBFBFB",padding:"12px 16px", borderRadius:"8px", border:"1px solid #E4E4E4", display:"flex", alignItems:"center", gap:"10px"}}>
                  <MdOutlineMail style={{fontSize:"20px", color:"#BABABA", fontWeight:"bolder"}}/>
                 <input className="login-input" style={{border:"none", outline:"none", width:"100%", height:"100%", backgroundColor:"transparent"}} type="text" placeholder="Street Address" />
               
               </div>
              
            </div>
             <div style={{display:"flex", flexDirection:"column", gap:"4px" ,width:"400px"}}>
              <label htmlFor="" style={{fontFamily:"Inter",color:"#1C1A1A", fontSize:"14px", fontWeight:"400"}} >Phone Number</label>
               <div className="outline" style={{backgroundColor:"#FBFBFB",padding:"12px 16px", borderRadius:"8px", border:"1px solid #E4E4E4", display:"flex", alignItems:"center", gap:"10px"}}>
                  <PiPhoneCallLight  style={{fontSize:"20px", color:"#BABABA"}}/>
                 <input className="login-input" style={{border:"none", outline:"none", width:"100%", height:"100%", backgroundColor:"transparent"}} type="text" placeholder="Enter Phone Number" />
               
               </div>
            </div>
             <div style={{display:"flex", flexDirection:"column", gap:"4px" ,width:"400px"}}>
              <label htmlFor="" style={{fontFamily:"Inter",color:"#1C1A1A", fontSize:"14px", fontWeight:"400"}} >Password</label>
               <div className="outline" style={{backgroundColor:"#FBFBFB",padding:"12px 16px", borderRadius:"8px", border:"1px solid #E4E4E4", display:"flex", alignItems:"center", gap:"10px"}}>
                  <TfiLock  style={{fontSize:"20px", color:"#BABABA"}}/>
                 <input className="login-input" style={{border:"none", outline:"none", width:"100%", height:"100%", backgroundColor:"transparent"}} type="password" placeholder="Passowrd" />
               
               </div>
            </div>
              <div style={{display:"flex", flexDirection:"column", gap:"4px" ,width:"400px"}}>
              <label htmlFor="" style={{fontFamily:"Inter",color:"#1C1A1A", fontSize:"14px", fontWeight:"400"}} >Re-Enter Password</label>
               <div className="outline" style={{backgroundColor:"#FBFBFB",padding:"12px 16px", borderRadius:"8px", border:"1px solid #E4E4E4", display:"flex", alignItems:"center", gap:"10px"}}>
                  <TfiLock  style={{fontSize:"20px", color:"#BABABA"}}/>
                 <input className="login-input" style={{border:"none", outline:"none", width:"100%", height:"100%", backgroundColor:"transparent"}} type="password" placeholder="Re-Enter Password" />
               
               </div>
            </div>
  
                <button  style={{fontFamily:"Inter", color:"white", fontWeight:"500", fontSize:"16px", backgroundColor:"#0084FF", borderRadius:"8px", width:"400px", padding:"12px 16px", border:"none", textAlign:"center", cursor:"pointer"}}>Next</button>
            
            
        </form>

      </div>
    </div>
  )
}

export default OrganizationSetup