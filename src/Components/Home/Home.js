import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import VolunteersActivist from "../VolunteersActivist/VolunteersActivist";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="HeroBanner">
        <NavBar />
        <SearchBar />
        <VolunteersActivist />
      </div>
    </>
  );
}

export default Home;
