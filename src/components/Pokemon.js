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
        <img src={pokemon.image} alt={pokemon.name} width="190px" />
      </div>
      <div className="pokemon__meta">
        <div className="pokemon__HP">
          <span>Max HP: {pokemon.maxHP}</span>
          <div
            style={{ height: "3px", width: "100px", border: "1px solid black" }}
            className="HP-border"
          >
            <div
              style={{ height: "3px", width: HP, backgroundColor: "gray" }}
              className="HP"
            ></div>
          </div>
          <div className="pokemon__CP">
            <span>Max CP: {pokemon.maxCP}</span>
            <div
              style={{
                height: "3px",
                width: "100px",
                border: "1px solid black",
              }}
              className="HP-border"
            >
              <div
                style={{ height: "3px", width: CP, backgroundColor: "gray" }}
                className="HP"
              ></div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="pokemon__body">
        <div className="weight">
          <p>Weight: {pokemon.weight.maximum}</p>
        </div>
        <div className="height">
          <p>Height: {pokemon.height.maximum}</p>
        </div>
      </div>
      <div className="pokemon__types">
        <p>Type: {pokemon.types[0]}</p>
      </div>
      <div className="pokemon__class">
        <p>Class: {pokemon.classification}</p>
      </div>
    </div>
  );
}
