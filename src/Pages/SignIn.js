import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Footer, Header, SignIn as Form } from "../Components";
import { FirebaseContext } from "../context/firebase";

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push("/browse");
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <Header>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
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
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup"> Sign up Here</Form.Link>{" "}
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
