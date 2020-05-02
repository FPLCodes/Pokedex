import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export function PokedexContainer() {
  const [currPokemon, setCurrPokemon] = useState("");

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  function nextPokemon() {
    setCurrPokemon(pokemons[0].name);
  }

  return (
    <div>
      <button onClick={nextPokemon}>Click</button>
      <span>{currPokemon}</span>
    </div>
  );
}
