import React from "react";
import "../App.css";

export function Pokemon({ pokemon }) {
  const Meta = (pokemon.maxHP / 4144) * 100;

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

      <div className="pokemon__HP" className="meta">
        <span>Max HP: {pokemon.maxHP}</span>
        <div className="border">
          <div style={{ width: Meta * 2 }} className="bar"></div>
        </div>
      </div>

      <div className="pokemon__CP" className="meta">
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
      </div>
    </div>
  );
}
