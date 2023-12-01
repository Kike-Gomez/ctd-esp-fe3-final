import { useState } from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ item }) => {
  const { theme, favs, dispatch } = useCharStates();
  const isFavorite = favs.some((fav) => fav.id === item.id);

  const addFav = () => {
    if (isFavorite) {
      dispatch({ type: "DELETE_FAV", payload: item });
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
    }
  };

  return (
    <div className={`card ${theme}er`}>
      <Link to={"/detail/" + item.id}>
        <img src="../src/Images/doctor.jpg" alt="" />
        <div className="card-data">
          <h4>{item.name}</h4>
          <h4>{item.username}</h4>
        </div>
      </Link>
      <button
        onClick={addFav}
        className={`${theme}er ${isFavorite ? "favorited" : ""}`}
      >
        <i className={`fa-solid fa-heart ${isFavorite ? "favorited" : ""}`}></i>
      </button>
    </div>
  );
};

export default Card;
