import { useEffect } from "react";
import "./App.css";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/1";

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAiiPokemon(initialURL);
    };
  }, []);
  return <div className="App"></div>;
}

export default App;
