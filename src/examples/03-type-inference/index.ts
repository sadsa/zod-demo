import { z } from "zod";

const PokemonTypeSchema = z.object({
  type: z.object({
    name: z.string(),
  }),
});

const PokemonSchema = z.object({
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  types: z.array(PokemonTypeSchema),
});

export type Pokemon = z.infer<typeof PokemonSchema>;

function validatePokemon(data: unknown): Pokemon {
  return PokemonSchema.parse(data);
}

export async function fetchPokemon(id: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return validatePokemon(data);
}
