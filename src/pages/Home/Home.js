import React from "react";

import Filters from "./components/Filters";
import Promos from './components/Promos'
import TopAppBar from "../../components/TopAppBar";
import Navigation from "../../components/BottomNavigation"

export default function Home() {
  return (
    <>
      <TopAppBar />
      <Filters />
      <Promos />
      <Navigation />
    </>
  );
}
