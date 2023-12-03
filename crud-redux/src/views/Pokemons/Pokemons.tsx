import { useGetPokemonByNameQuery } from '../../services/pokemon'




export const Pokemons = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>{data.species.name}</h1>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}
