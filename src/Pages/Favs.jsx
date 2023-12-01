import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";
import useBackNavigation from "./Utils/navigationUtils";

const Favs = () => {
  const { theme, favs, dispatch } = useCharStates();
  const { handleBack } = useBackNavigation();

  const handleDeleteAllFavs = () => {
    dispatch({ type: "DELETE_ALL_FAVS" });
  };

  return (
    <main className={`fav ${theme}`}>
      {favs.length > 0 ? (
        <>
          <i onClick={handleBack} className="fa-solid fa-arrow-left"></i>
          <h3>Favourite Dentists</h3>
          <div className="card-grid">
            {favs.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <div className="trash">
            <i onClick={handleDeleteAllFavs} className="fa-solid fa-trash-can"></i>
            <p>Borrar todo</p>
          </div>
          
        </>
      ) : (
        <h2>You dont have any favorite dentist.</h2>
      )}
    </main>
  );
};

export default Favs;
