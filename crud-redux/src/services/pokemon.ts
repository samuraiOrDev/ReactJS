import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


/* 
  -fetchBaseQuery: Es una función de utiliza que crear una instancia de cliente HTTP para realizar las peticiones a la API.
  - createApi:  es una función que se utiliza para crear una instancia de API utilizando Redux Toolkit. Toma un objeto de configuración como argumento, que incluye la ruta del reductor, la instancia del cliente HTTP y los puntos finales de la API.
  - endpoints: es una función que toma un objeto de configuración como argumento y define los puntos finales de la API.
  */
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;