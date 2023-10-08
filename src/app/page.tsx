import { Pokedex } from "./components/Pokedex";

export default async function Home() {


  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#DADFE8]">
      <Pokedex/>
    </main>
  )
}