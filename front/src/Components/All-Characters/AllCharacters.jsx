import React, { useState, useEffect } from "react";
import "./AllCharacters.scss";
import Character from "./Character";

const API_LINK =
  "https://crud-operations-in-mongodb-with-nodejs.onrender.com/get-all-users/";

async function getCharacters() {
  let response = await fetch(API_LINK);
  let data = await response.json();
  return data;
}

const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="AllCharacters">
      <div className="allcharacters--grid">
        {characters.map((char, index) => (
          <Character 
            Image={char.Image} 
            key={index} 
            Name={char.Name}
            Nationallity={char.Nationallity}
            Age={char.Age}
            Habilities={char.Habilities}
            Personality={char.Personality}
            Status={char.Status}
            />
        ))}
      </div>
    </div>
  );
};

export default AllCharacters;
