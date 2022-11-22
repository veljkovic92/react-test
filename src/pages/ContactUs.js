import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  // const [nameIsValid, setNameIsValid]  = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  // const [emailIsValid, setEmailIsValid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageIsTouched, setMessageIsTouched] = useState(false);
  // const [messageIsValid, setMessageIsValid] = useState(false);

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onNameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onEmailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const onMessageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const onMessageBlurHandler = () => {
    setMessageIsTouched(true);
  };

  const nameIsValid = name.length >= 4;
  const emailIsValid = email.includes("@");
  const messageIsValid = message.length < 1 || message.length <= 100;

  const nameIsInvalid = !nameIsValid && nameIsTouched;
  const emailIsinvalid = !emailIsValid && emailIsTouched;
  const messageIsinvalid = !messageIsValid && messageIsTouched;

  return (
    <section>
      <form>
        <div>
          <label htmlFor="name-input">Name</label>
          <input
            id="name-input"
            type="text"
            onChange={onNameChangeHandler}
            onBlur={onNameBlurHandler}
          />
          <p>{nameIsInvalid && "Please add more than 4 characters!"}</p>
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            onChange={onEmailChangeHandler}
            onBlur={onEmailBlurHandler}
          />
          <p>{emailIsinvalid && "Please add correct email!"}</p>
        </div>
        <div>
          <label htmlFor="message-input">Your Message</label>
          <input
            id="message-input"
            type="text"
            maxLength="100"
            onChange={onMessageChangeHandler}
            onBlur={onMessageBlurHandler}
          />
          <p>{messageIsinvalid && "Please don't exceed the message length limit!"}</p>
          <p>..... number of left characters</p>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
