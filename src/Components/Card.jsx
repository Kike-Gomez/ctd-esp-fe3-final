import { useState } from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ item }) => {
  const { theme, favs, dispatch } = useCharStates();
  const findFav = favs.find(()=> favs.id === item.id)
  const [isFavorite, setIsFavorite] = useState(false);

  const addFav = () => {
    setIsFavorite(!isFavorite)
    if(findFav){
      dispatch({ type: "DELETE_FAV", payload: item })
    } else{
      dispatch({ type: "ADD_FAV", payload: item })
    }

  };

  return (
    <div className={`card ${theme}er`}>
      <Link to={"/detail/" + item.id}>
        <img src="../../public/images/doctor.jpg" alt="" />
        <div className="detailData">
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
