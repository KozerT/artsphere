import React from "react";
import { useState } from "react";

const AuthorizationForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleInputChange = (identifier, value) => {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  return (
    <div>
      <div>
        <p>
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(event) => {
              handleInputChange("password", event.target.value);
            }}
          />
        </p>
      </div>
      <div>
        <button type="button"> Create a new account</button>
        <button>Sign In </button>
      </div>
    </div>
  );
};

export default AuthorizationForm;
