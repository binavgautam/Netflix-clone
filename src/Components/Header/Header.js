import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Background, Container, Logo } from "./style";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Button = function HeaderButton({ to, children, ...restProps }) {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
