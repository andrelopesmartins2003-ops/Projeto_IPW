import { useEffect, useState } from "react";
import axios from "axios";
import "./DriverWorldChampion.css";

function WorldChampions() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/d081d6c2a843a910c64b59a0f76de16f/f1Api/driversChampions")
      .then((response) => {
        setChampions(response.data.driversChampions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching drivers champions:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading world champions...</p>;
  }

  return (
    <div className="champions">
      <h2>🏆 Driver World Champions</h2>

      <div className="champion-list">
        {champions.map((champion) => (
          <div className="champion-card" key={champion.id}>
            <img src={champion.image} alt={champion.driver} />

            <h3>{champion.year}</h3>
            <p>
              <strong>Driver:</strong> {champion.driver}
            </p>
            <p>
              <strong>Team:</strong> {champion.team}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorldChampions;
