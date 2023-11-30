import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCharStates } from "../Context/Context";

const Detail = () => {
  const { list, theme, dispatch } = useCharStates();
  const [character, setCharacter] = useState({}); //esto migrarlo al context
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(url).then((res) => setCharacter(res.data));
  }, []);

  return (
    <main className={theme}>
      <div className='detail'>
        <img src="../../public/images/doctor.jpg" alt="" />
        <div>
          <h3>Name: {character.name}</h3>
          <h3>Email: {character.email}</h3>
          <h3>Phone: {character.phone}</h3>
          <h3>Website: {character.website}</h3>
          <h3>Username: {character.username}</h3>
        </div>
      </div>
    </main>
  );
};

export default Detail;
