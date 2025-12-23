import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import PhoneVerification from "./Components/PhoneVerification";
import OrganizationSetup from "./Components/OrganizationSetup";
import AccountSetup from "./Components/AccountSetup";
import ForgotPassword from "./Components/ForgotPassword";
import SetNewPassword from "./Components/SetNewPassword";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/create-account" element={<CreateAccount/>} />
      <Route path="/phone-verification" element={<PhoneVerification/>} />
      <Route path="/organization-setup" element={<OrganizationSetup/>} />
      <Route path="/account-setup" element={<AccountSetup/>} />
      <Route path="/forgot=password" element={<ForgotPassword/>} />
      <Route path="/set-newpassword" element={<SetNewPassword/>} />
     
    </Routes>
  );
};

export default AppRoutes;
