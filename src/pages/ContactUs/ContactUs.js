import classes from "./ContactUs.module.scss";
import { useState } from "react";
import { useEffect } from "react";

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

  const [formIsValid, setFormIsValid] = useState(false);

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

  const calculateChars = 500 - message.length;

  const nameIsValid = name.length >= 4;
  const emailIsValid = email.includes("@");
  const messageIsValid = message.length > 10 && message.length <= 100;

  const nameIsInvalid = !nameIsValid && nameIsTouched;
  const emailIsinvalid = !emailIsValid && emailIsTouched;
  const messageIsInvalid = !messageIsValid && messageIsTouched;

  useEffect(() => {
    if (nameIsValid && emailIsValid && messageIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid, emailIsValid, messageIsValid]);

  return (
    <section className={classes["contact-us"]}>
      <h2>Fill out the form below to inquire for any bike</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(`Form data:
          name: ${name}
          email: ${email}
          message: ${message}
        `);
        }}
      >
        <div className={classes["name-field"]}>
          <div className={classes["name-body"]}>
            <label htmlFor="name-input">Name</label>
            <input
              id="name-input"
              type="text"
              onChange={onNameChangeHandler}
              onBlur={onNameBlurHandler}
            />
          </div>
          <div className={classes["name-info"]}>
            <p>{nameIsInvalid && "Please add more than 4 characters!"}</p>
          </div>
        </div>
        <div className={classes["email-field"]}>
          <div className={classes["email-body"]}>
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              type="email"
              onChange={onEmailChangeHandler}
              onBlur={onEmailBlurHandler}
            />
          </div>
          <div className={classes["email-info"]}>
            <p>{emailIsinvalid && "Please add correct email!"}</p>
          </div>
        </div>
        <div className={classes["message-field"]}>
          <div className={classes["message-body"]}>
            <label htmlFor="message-input">Message</label>
            <input
              id="message-input"
              type="text"
              maxLength="100"
              onChange={onMessageChangeHandler}
              onBlur={onMessageBlurHandler}
            />
          </div>
          <div className={classes["message-info"]}>
            <p>{calculateChars} characters left</p>
            <p>
              {messageIsInvalid &&
                "Message must be between 10 and 500 characters long!"}
            </p>
          </div>
          <div>
            <button
              className={classes["submit-btn"]}
              type="submit"
              disabled={!formIsValid}
            >
              Contact Us
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
