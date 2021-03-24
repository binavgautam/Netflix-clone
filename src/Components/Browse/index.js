import React, { useState, useContext, useEffect } from "react";
import SelectProfile from "../Profile";
import { FirebaseContext } from "../../context/firebase";
import { Loading } from "..";
import Header from "../Header";

export default function Index({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1">
        <p>h</p>
      </Header>
    </>
  ) : (
    <SelectProfile user={user} setProfile={setProfile} />
  );
}
