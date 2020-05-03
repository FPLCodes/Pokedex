import React from "react";
import "../App.css";

export function Pokemon({ pokemon }) {
  const Meta = (pokemon.maxHP / 4144) * 100;
  let color1, color2;

  switch (pokemon.types[0]) {
    case "Grass":
      color1 = "green";
      break;
    case "Poison":
      color1 = "purple";
      break;
    case "Fire":
      color1 = "darkorange";
      break;
    case "Water":
      color1 = "dodgerblue";
      break;
    case "Bug":
      color1 = "darkgreen";
      break;
    case "Normal":
      color1 = "gray";
      break;
    case "Electric":
      color1 = "yellow";
      break;
    case "Ground":
      color1 = "chocolate";
      break;
    case "Fairy":
      color1 = "pink";
      break;
    case "Flying":
      color1 = "lightblue";
      break;
    case "Fighting":
      color1 = "brown";
      break;
    case "Psychic":
      color1 = "hotpink";
      break;
    case "Rock":
      color1 = "saddlebrown";
      break;
    case "Steel":
      color1 = "lightslategray";
      break;
    case "Ice":
      color1 = "deepskyblue";
      break;
    case "Ghost":
      color1 = "slateblue";
      break;
    case "Dragon":
      color1 = "orangered";
      break;
  }

  switch (pokemon.types[1]) {
    case "Grass":
      color2 = "green";
      break;
    case "Poison":
      color2 = "purple";
      break;
    case "Fire":
      color2 = "darkorange";
      break;
    case "Water":
      color2 = "dodgerblue";
      break;
    case "Bug":
      color2 = "darkgreen";
      break;
    case "Normal":
      color2 = "gray";
      break;
    case "Electric":
      color2 = "yellow";
      break;
    case "Ground":
      color2 = "chocolate";
      break;
    case "Fairy":
      color2 = "pink";
      break;
    case "Flying":
      color2 = "lightblue";
      break;
    case "Fighting":
      color2 = "brown";
      break;
    case "Psychic":
      color2 = "hotpink";
      break;
    case "Rock":
      color2 = "saddlebrown";
      break;
    case "Steel":
      color2 = "lightslategray";
      break;
    case "Ice":
      color2 = "deepskyblue";
      break;
    case "Ghost":
      color2 = "slateblue";
      break;
    case "Dragon":
      color2 = "orangered";
      break;
  }

  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <div className="blue-circle"></div>
        <p className="name"> {pokemon.name}</p>
        <p className="number">#{pokemon.number}</p>
      </div>

      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} width="180px" />
      </div>

      <div className="pokemon__HP">
        <span>Max HP: {pokemon.maxHP}</span>
        <div className="border">
          <div style={{ width: Meta * 2 }} className="bar"></div>
        </div>
      </div>

      <div className="pokemon__CP">
        <span>Max CP: {pokemon.maxCP}</span>
        <div className="border">
          <div style={{ width: Meta * 2 }} className="bar"></div>
        </div>
      </div>
      <br />

      <div className="pokemon__body">
        <div>
          <p className="body">Weight: {pokemon.weight.maximum}</p>
        </div>
        <div>
          <p className="body">Height: {pokemon.height.maximum}</p>
        </div>
      </div>

      <div className="pokemon__class">
        <p className="class">{pokemon.classification}</p>
        <div className="types">
          <span className="type" style={{ backgroundColor: color1 }}>
            {pokemon.types[0]}
          </span>
          {pokemon.types.length > 1 && (
            <span className="type" style={{ backgroundColor: color2 }}>
              {pokemon.types[1]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
