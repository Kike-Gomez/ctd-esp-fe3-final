import React from "react";
import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";

const Favs = () => {
  const { theme, favs } = useCharStates();

  return (
    <main className={`fav ${theme}`}>
      {favs.length > 0 ? (
        <>
          <h3>Favourite Dentists</h3>
          <div className="card-grid">
            {favs.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </>
      ) : (
        <h2>You dont have any favorite dentist.</h2>
      )}
    </main>
  );
};

export default Favs;
