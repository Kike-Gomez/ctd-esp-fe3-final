import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
        <NavLink to="/">
          <h4>Home</h4>
        </NavLink>
        <NavLink to="/contact">
          <h4>Contact</h4>
        </NavLink>
        <NavLink to="/favs">
          <h4>Favs</h4>
        </NavLink>
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
