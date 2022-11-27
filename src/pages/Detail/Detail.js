import React from "react";
import { useParams } from "react-router-dom";

import FilterButton from "../../components/FilterButton/FilterButton";

export default function Detail (props) {
  const { name, score, img } = props;
  const routeParams = useParams();

  return (
    <h1>detay {routeParams.id}</h1>
  );
}