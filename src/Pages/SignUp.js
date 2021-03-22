import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Footer, Header, SignIn as Form } from "../Components";
import { FirebaseContext } from "../context/firebase";

export default function SignUp() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = username === "" || password === "" || emailAddress === "";

  const handleSignUp = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: username,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push("/browse");
          });
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setUsername("");
        setError(error.message);
      });
  };

  return (
    <>
      <Header>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="username"
              placeholder="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Pasword"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already have an account?{" "}
            <Form.Link to="/signup"> Sign In Here</Form.Link>{" "}
          </Form.Text>
          <Form.TextSmall>
            This Page is protected by Google reCaptcha to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </Header>
      <Footer />;
    </>
  );
}
