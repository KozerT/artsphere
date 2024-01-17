import React from "react";
import { useState } from "react";

const AuthorizationForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (identifier, value) => {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = () => {
    setSubmitted(true);
  };

  const emailNotValid =
    submitted && !enteredEmail.includes("^[w-.]+@([w-]+.)+[w-]{2,4}$");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            className={emailNotValid ? "invalid" : undefined}
          />
        </p>
        <p>
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(event) => {
              handleInputChange("password", event.target.value);
            }}
            className={passwordNotValid ? "invalid" : undefined}
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button onClick={handleLogin} className="button">
          Sign In{" "}
        </button>
      </div>
    </div>
  );
};

export default AuthorizationForm;
