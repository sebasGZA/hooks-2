import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

    const { counter, increment, decrement } = useCounter()
    const { pokemon, isLoading } = usePokemon({ id: counter });

    if (isLoading)
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Loading...</h1>
            </div>
        )


    if (!pokemon)
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokemon not found</h1>
            </div>
        )

    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">{`#00${pokemon.id} ${pokemon.name}`}</h3>
            <img
                src={pokemon.url}
                alt={pokemon.name}
            />

            <div className="flex gap-2">

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={decrement}
                >
                    Anterior
                </button>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={increment}
                >
                    Siguiente
                </button>

            </div>
        </div>
    );
};