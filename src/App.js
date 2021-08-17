import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import "./App.css";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fetchItems = async () => {
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    console.log(result.data);
    setItems(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [query, fetchItems]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={items} />
    </div>
  );
};

export default App;
