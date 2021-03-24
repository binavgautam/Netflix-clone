import React from "react";
import Header from "./Header";

export default function index({ children, ...restProps }) {
  return (
    <Header {...restProps}>
      <Header.Frame>
        <Header.Logo
          src="https://raw.githubusercontent.com/karlhadwen/netflix/56498197024f7e1ca95a075eaaa5e4eb0e4bb42b/src/logo.svg"
          to={"/"}
        />
        <Header.Button to={"/signin"}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
