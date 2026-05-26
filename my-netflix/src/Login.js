import React, { useState } from "react";

import "./Login.css";

import {
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  provider
} from "./firebase";

function Login() {

  const [loading, setLoading] = useState(false);

  const signIn = async () => {

    setLoading(true);

    try {

      await signInWithPopup(auth, provider);

    } catch (error) {

      console.log(error);

    }

    setLoading(false);
  };

  return (
    <div className="login">

      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
      </div>

      <div className="login__body">

        <h1>
          Unlimited movies, TV shows, and more
        </h1>

        <h2>
          Watch anywhere. Cancel anytime.
        </h2>

        <button
          className="signin__btn"
          onClick={signIn}
        >
          {loading
            ? "Loading..."
            : "Sign In With Google"}
        </button>

      </div>

    </div>
  );
}

export default Login;