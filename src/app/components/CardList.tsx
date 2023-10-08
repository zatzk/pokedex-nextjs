"use client";
import useAxios from "axios-hooks";
import { Cards } from "./Cards";



export function CardList({ formData }) {
  console.log(formData)
  const [{ data, loading, error }] = useAxios<any>({
    baseURL: "https://pokeapi.co/api/v2/",
    url: `/pokemon/${formData.name.toLowerCase()}`,
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null; // or return a loading indicator or error message
  }
  const res =
      {
        id: data.id,
        name: data.name,
        type: data.types?.[0]?.type?.name ?? "normal",
        image: data.sprites?.other?.home?.front_default || "DefaultImageURL",
        status: {
          hp: data.stats?.[0]?.base_stat ?? 0,
          attack: data.stats?.[1]?.base_stat ?? 0,
          defense: data.stats?.[2]?.base_stat ?? 0,
          speed: data.stats?.[5]?.base_stat ?? 0,
        },
        moves: [
          data.moves?.[0]?.move?.name ?? "No move",
          data.moves?.[1]?.move?.name ?? "No move",
          data.moves?.[2]?.move?.name ?? "No move",
          data.moves?.[3]?.move?.name ?? "No move",
        ],
      }

  // console.log(res);

  return (
    <div id="cardList">
      <Cards 
        data={res}
      />
    </div>
  )
}

