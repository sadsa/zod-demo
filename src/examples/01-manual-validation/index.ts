type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
};

function validatePokemon(data: unknown): Pokemon {
  if (typeof data !== "object" || data === null) {
    throw new Error("Data must be an object");
  }

  if (!("name" in data) || typeof data.name !== "string") {
    throw new Error("Invalid name");
  }

  if (!("height" in data) || typeof data.height !== "number") {
    throw new Error("Invalid height");
  }

  if (!("weight" in data) || typeof data.weight !== "number") {
    throw new Error("Invalid weight");
  }

  if (!("types" in data) || !Array.isArray(data.types)) {
    throw new Error("Invalid types");
  }

  return data as Pokemon;
}

export async function fetchPokemon(id: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return validatePokemon(data);
}
