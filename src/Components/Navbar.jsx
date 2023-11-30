import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Navbar = () => {
  const navigate = useNavigate();

  const { theme, dispatch } = useCharStates();

  const toggleTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <header className={`${theme}er`}>
      <h1 onClick={() => navigate("/")}>DH Odonto</h1>
      <nav>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/favs">
          <h4>Favs</h4>
        </Link>
        <button onClick={toggleTheme}>
          <i class="fa-solid fa-moon"></i>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
