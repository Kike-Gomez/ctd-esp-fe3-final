import React from "react";
import Form from "../Components/Form";
import { useCharStates } from "../Context/Context";

const Contact = () => {
  const { theme } = useCharStates();

  return (
    <main className={theme}>
      <div>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </div>
    </main>
  );
};

export default Contact;
