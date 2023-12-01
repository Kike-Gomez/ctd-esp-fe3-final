import { useEffect } from "react";
import Form from "../Components/Form";
import { useCharStates } from "../Context/Context";
import useBackNavigation from "./Utils/navigationUtils";

const Contact = () => {
  const { theme, showContactHeaders, dispatch } = useCharStates();
  const { handleBack } = useBackNavigation();

  useEffect(() => {
    dispatch({ type: "CONTACT_VISIBILITY", payload: true });
  }, [dispatch]);

  return (
    <main className={`form ${theme}`}>
      <i onClick={handleBack} className="fa-solid fa-arrow-left"></i>
      {showContactHeaders && (
        <div className="contact">
          <h1>Want to know more?</h1>
          <h3>Send us your questions and we will contact you</h3>
        </div>
      )}
      <Form />
    </main>
  );
};

export default Contact;
