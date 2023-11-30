import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

const Home = () => {
  const { list, theme } = useCharStates();

  return (
    <main className={theme}>
      <div className="card-grid">
        {list.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
