import { z } from "zod";

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

const PokemonTypeSchema = z.object({
  type: z.object({
    name: z.string(),
  }),
});

const PokemonSchema = z.object({
  name: z.string(),
  height: z.number(),
  weight: z.string(),
  types: z.array(PokemonTypeSchema),
});

export async function fetchPokemon(id: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return PokemonSchema.parse(data);
}
