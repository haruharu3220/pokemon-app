import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon.js";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/1";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    getAllPokemon();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <h1>ポケモンデータを取得しました。</h1>
      )}
    </div>
  );
}

export default App;
