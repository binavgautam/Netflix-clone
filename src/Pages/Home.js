import React from "react";
import {
  Accordion,
  Footer,
  Jumbotron,
  Header,
  Form,
  Features,
} from "../Components";

export default function Home() {
  return (
    <>
      <Header>
        <Features>
          <Features.Title>Unlimited Films, TV shows and more.</Features.Title>
          <Features.SubTitle>Watch Anywhere. Anytime.</Features.SubTitle>
          <Form>
            <Form.Input placeholder="Email" />
            <Form.Button>Try it Today</Form.Button>
            <Form.Break />
            <Form.Text>
              Enter your email to sign up or login and start watching Today!
            </Form.Text>
          </Form>
        </Features>
      </Header>

      <Jumbotron />
      <Accordion />
      <Footer />
    </>
  );
}
