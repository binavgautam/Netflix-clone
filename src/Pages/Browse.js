import React from "react";
import { Footer, Browse } from "../Components";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selectionFilter";

export default function BrowsePage() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return (
    <>
      <Browse />
    </>
  );
}
