import React from "react";
import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";

const Favs = () => {
  const { theme, favs } = useCharStates();

  return (
    <main className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
