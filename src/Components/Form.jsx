import { useState } from "react";
import { useCharStates } from "../Context/Context";

const Form = () => {
  const { theme, dispatch } = useCharStates();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  function validateName(inputText) {
    const letterRegex = /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ\s]+$/;
    return letterRegex.test(inputText);
  }

  function validateEmail(inputText) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(inputText);
  }
  const handleChange = (e, objProp) =>
    setFormValues({ ...formValues, [objProp]: e.target.value.trimEnd() });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formValues.name.length > 5 &&
      validateName(formValues.name) &&
      validateEmail(formValues.email)
    ) {
      setShow(true);
      setError(false);
      dispatch({ type: "CONTACT_VISIBILITY", payload: false });
      console.log(formValues);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {!show && (
        <form onSubmit={handleSubmit} className={`${theme}er`}>
          <label>Name</label>
          <input
            type="text"
            value={formValues.name || ""}
            onChange={(e) => handleChange(e, "name")}
            placeholder="Enter your name"
          />
          <label>Email</label>
          <input
            type="email"
            value={formValues.email || ""}
            onChange={(e) => handleChange(e, "email")}
            placeholder="Enter your email address"
          />
          <button>Submit</button>
        </form>
      )}
      {show && (
        <div className="success">
          <i className="fa-regular fa-thumbs-up"></i>
          <h2>Thanks {formValues.name}</h2>
          <p>We will contact you soon by email.</p>
        </div>
      )}
      {error && (
        <div className="error">
          <h4>Please check your information again.</h4>
        </div>
      )}
    </div>
  );
};

export default Form;
