import React from "react";
import { dhLogo } from "../Images/DH.png";
import { useCharStates } from "../Context/Context";

const Footer = () => {
  const { theme } = useCharStates();

  return (
    <footer className={`${theme}er`}>
      <div className="logo">
        <p>Powered by</p>
        <img src={ dhLogo } alt="DH-logo" />
      </div>
      <div className="social">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-tiktok"></i>
      </div>
    </footer>
  );
};

export default Footer;
