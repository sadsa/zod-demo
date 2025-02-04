import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./index.css";

const searchSchema = z.object({
  pokemonId: z
    .number()
    .min(1, "Pokemon ID must be 1 or greater")
    .max(150, "Pokemon ID must be 150 or less")
    .int("Pokemon ID must be a whole number"),
});

export type SearchFormData = z.infer<typeof searchSchema>;

interface SearchFormProps {
  onSubmit: (data: SearchFormData) => void;
  loading: boolean;
}

export function SearchForm({ onSubmit, loading }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="search-form-input-container">
        <input
          type="number"
          placeholder="Enter Pokemon ID"
          aria-label="Pokemon ID"
          {...register("pokemonId", { valueAsNumber: true })}
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </div>
      {errors.pokemonId && (
        <p className="search-form-error">{errors.pokemonId.message}</p>
      )}
    </form>
  );
}
