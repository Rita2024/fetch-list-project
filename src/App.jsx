import React, { useEffect, useState } from "react";
import ListComponent from "./components/ListComponent.jsx";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Example API

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ListComponent
        items={data}
        renderItem={(item) => <p>{item.name}</p>}
      />
    </div>
  );
};

export default App;