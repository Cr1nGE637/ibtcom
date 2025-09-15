import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage.tsx";
import PrivacyPolicyPage from "./Components/Pages/PrivacyPolicyPage.tsx";
import TelephonyPage from "./Components/Pages/TelephonyPage.tsx";
import SoftwarePage from "./Components/Pages/SoftwarePage.tsx";
import HardwarePage from "./Components/Pages/HardwarePage.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={"/ibtcom"}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={"/telephony"} element={<TelephonyPage />} />
        <Route path={"/software"} element={<SoftwarePage />} />
        <Route path={"/hardware"} element={<HardwarePage />} />
        <Route path={"/privacy-policy"} element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
