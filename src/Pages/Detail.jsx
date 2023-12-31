import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCharStates } from "../Context/Context";
import useBackNavigation from "./Utils/navigationUtils";

const Detail = () => {
  const { list, theme, dispatch } = useCharStates();
  const { handleBack } = useBackNavigation();
  const { id } = useParams();
  const character = list.find((char) => char.id === parseInt(id));
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    if (!character) {
      axios(url).then((res) => {
        dispatch({ type: "GET_CHARACTER", payload: res.data });
      });
    }
  }, []);

  return (
    <main className={theme}>
      <i onClick={handleBack} className="fa-solid fa-arrow-left"></i>
      <div className={`detail ${theme}er`}>
        <img src="/static/images/doctor.jpg" alt="" />
        <div className='detail-data'>
          <h3>Name: {character.name}</h3>
          <h3>Email: {character.email}</h3>
          <h3>Phone: {character.phone}</h3>
          <h3>City: {character.address.city}</h3>
          <h3>Website: {character.website}</h3>
          <h3>Username: {character.username}</h3>
        </div>
      </div>
    </main>
  );
};

export default Detail;
