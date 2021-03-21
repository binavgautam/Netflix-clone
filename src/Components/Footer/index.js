import React from "react";
import Footer from "./Footer";

export default function index() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact Us</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investors</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Info</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help</Footer.Link>
          <Footer.Link href="#">Unable to Sign in</Footer.Link>
          <Footer.Link href="#">Show not loading</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">See all Plans</Footer.Link>
          <Footer.Link href="#">Gift Cards</Footer.Link>
          <Footer.Link href="#">Prefrences</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Title>Netlix USA</Footer.Title>
    </Footer>
  );
}
