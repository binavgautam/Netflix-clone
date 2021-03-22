import React from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./style";

export default function SignIn({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignIn.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

SignIn.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

SignIn.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SignIn.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SignIn.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

SignIn.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

SignIn.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

SignIn.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
