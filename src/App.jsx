import { useEffect, useMemo, useState } from "react";
import menuData from "./data/menuData.js";
import MenuList from "./components/MenuList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import AddItemForm from "./components/AddItemForm.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import "./App.css";

// Simulates a network call to a backend. In a real app this would be a
// fetch(...) request; here we just return the local data after a delay,
function fetchMenuFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(menuData), 900);
  });
}

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetchMenuFromServer().then((data) => {
      if (isMounted) {
        setItems(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  function handleAddItem(newItem) {
    setItems((prev) => [newItem, ...prev]);
  }

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return items;
    return items.filter((item) => item.name.toLowerCase().includes(term));
  }, [items, searchTerm]);

  return (
    <div className="app">
      <header className="app__header">
        <p className="app__eyebrow">Floor Staff Menu Board</p>
        <h1 className="app__title">Food Truck Menu</h1>
        <p className="app__subtitle">
          Look up items fast, even on a slow connection.
        </p>
      </header>

      <main className="app__main">
        <AddItemForm onAddItem={handleAddItem} />

        <SearchBar value={searchTerm} onSearchChange={setSearchTerm} />

        {isLoading ? (
          <LoadingSpinner label="Loading menu..." />
        ) : (
          <MenuList items={filteredItems} searchTerm={searchTerm} />
        )}
      </main>
    </div>
  );
}

export default App;