import React, { createContext, useState, useContext } from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from "./style";

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ children, item, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      {...restProps}
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
};

Card.Feature = function CardFeature({ children, ...restProps }) {
  return <Feature {...restProps} />;
};

Card.FeatureTitle = function CardFeatureTitle({ children, ...restProps }) {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>;
};

Card.FeatureClose = function CardFeatureClose({ children, ...restProps }) {
  return <FeatureClose {...restProps}>{children}</FeatureClose>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Maturity = function CardMaturity({ children, ...restProps }) {
  return <Maturity {...restProps}>{children}</Maturity>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
