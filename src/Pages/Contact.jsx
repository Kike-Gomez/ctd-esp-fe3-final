import Form from "../Components/Form";
import { useCharStates } from "../Context/Context";

const Contact = () => {
  const { theme, showContactHeaders } = useCharStates();

  return (
    <main className={theme}>
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
