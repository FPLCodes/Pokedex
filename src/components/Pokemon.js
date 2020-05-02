import React from "react";
import "../App.css";

export function Pokemon({ pokemon }) {
  const HP = (pokemon.maxHP / 4500) * 100;
  const CP = (pokemon.maxCP / 4500) * 100;

  return (
    <div className="pokemon">
      <div className="pokemon__number">
        <p className="number">{pokemon.number}</p>
      </div>
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} width="150px" />
      </div>
      <div className="pokemon__meta">
        <span>Max HP: {pokemon.maxHP}</span>
        <div
          style={{ height: "3px", width: "100px", border: "1px solid black" }}
          className="HP-border"
        >
          <div
            style={{ height: "3px", width: HP, backgroundColor: "gray" }}
            className="HP"
          ></div>
          <span>Max CP: {pokemon.maxCP}</span>
          <div
            style={{ height: "3px", width: "100px", border: "1px solid black" }}
            className="HP-border"
          >
            <div
              style={{ height: "3px", width: CP, backgroundColor: "gray" }}
              className="HP"
            ></div>
          </div>
        </div>
        <br />
      </div>
      <div className="pokemon__body">
        <p>Weight: {pokemon.weight.maximum}</p>
        <p>Height: {pokemon.height.maximum}</p>
      </div>
      <div className="pokemon__types">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__class">
        <p>{pokemon.classification}</p>
      </div>
    </div>
  );
}
