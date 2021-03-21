import React from "react";
import { Container, Title, SubTitle } from "./style";

export default function Features({ children, ...restProps }) {
  return <Container {...restProps}></Container>;
}

Features.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Features.SubTitle = function FeatureTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
