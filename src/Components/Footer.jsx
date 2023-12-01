import { useCharStates } from "../Context/Context";

const Footer = () => {
  const { theme } = useCharStates();

  return (
    <footer className={`${theme}er`}>
      <div className="logo">
        <p>Powered by</p>
        <img src="/static/images/dh.png" alt="DH-logo" />
      </div>
      <div className="social">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </footer>
  );
};

export default Footer;
