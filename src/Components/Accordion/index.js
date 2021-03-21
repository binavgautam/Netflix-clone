import React from "react";
import Accordion from "./Accordion";
import faqsData from "../../Fixtures/faqs.json";
import Form from "../Form/Form.js";

export default function index() {
  return (
    <>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}

        <Form>
          <Form.Input placeholder="Email" />
          <Form.Button>Try it Today</Form.Button>
          <Form.Text>
            Enter your email to sign up or login and start watching Today!
          </Form.Text>
        </Form>
      </Accordion>
    </>
  );
}