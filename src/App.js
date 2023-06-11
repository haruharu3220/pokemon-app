import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/1";

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      console.log(res);
    };
    getAllPokemon();
  }, []);
  return <div className="App"></div>;
}

export default App;
