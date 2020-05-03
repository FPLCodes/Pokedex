import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Pokemon } from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import "../App.css";

export function PokedexContainer() {
  const [loading, setLoading] = useState(false);
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="bg">
          <img
            src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
            width="150px"
            className="pokeball"
          />
        </div>
      ) : (
        <div className="container">
          {pokemons &&
            pokemons.map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
      )}
    </div>
  );
}
