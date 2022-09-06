import "./styles.css";
import React, { useState } from "react";
import naruto from "./images/naruto.png";
import onepunchman from "./images/onepunchman.png";
import grownups from "./images/grownups.jpg";
import grownups2 from "./images/grownups2.png";
import raid from "./images/raid.png";
import magadhera from "./images/magadhera.png";

const movie = {
  Anime: [
    { images: naruto, name: "Naruto", rating: "5 / 5" },
    {
      images: onepunchman,
      name: "One Punch Man",
      rating: "4 / 5"
    }
  ],
  Comedy: [
    { images: grownups, name: "Grown-up", rating: "5 / 5" },
    { images: grownups2, name: "Grown-ups 2", rating: "4 / 5" }
  ],
  Action: [
    {
      images: raid,
      name: "The Raid Redemption",
      rating: "5 / 5"
    },
    { images: magadhera, name: "Magadhera", rating: "4 / 5" }
  ]
};

export default function App() {
  var [item, setList] = useState("Anime");
  function clickHandler(list) {
    setList(list);
  }

  return (
    <div className="App">
      <h1>🎦favourite movies</h1>
      <div>
        {Object.keys(movie).map((list) => (
          <button key={list} onClick={() => clickHandler(list)}>
            {list}
          </button>
        ))}
      </div>
      <div className="Container">
        <ul className="list">
          {movie[item].map((movi) => (
            <li key={movi.name} className="list-listed">
              <div className="flt-left">
                <img
                  src={movi.images}
                  alt="Loading...."
                  className="images"
                ></img>
              </div>
              <div className="flt-right">
                <div>
                  <h1> Movie : {movi.name}</h1>
                </div>
                <div>
                  {" "}
                  <h3>Rating : {movi.rating}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
