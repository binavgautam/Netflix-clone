import React from "react";
import Header from "../Header/Header";
import Profile from "./Profile";

export default function SelectProfile({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={"/"}
            src="https://raw.githubusercontent.com/karlhadwen/netflix/56498197024f7e1ca95a075eaaa5e4eb0e4bb42b/src/logo.svg"
            alt="Netflix "
          />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Who's Watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
