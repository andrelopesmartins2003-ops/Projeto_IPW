import { useEffect, useState } from "react";
import axios from "axios";
import "./RaceWinners.css";

function RaceWinners() {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/d081d6c2a843a910c64b59a0f76de16f/f1Api/races")
      .then((response) => {
        setRaces(response.data.races);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching races:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading race winners...</p>;
  }

  return (
    <div className="races">
      <h2>🏁 Race Winners</h2>

      {races.map((race) => (
        <div className="race-card" key={race.id}>
          <p><strong>Year:</strong> {race.year}</p>
          <p><strong>Race:</strong> {race.raceName}</p>
          <p><strong>Winner:</strong> {race.winner}</p>
          <p><strong>Team:</strong> {race.team}</p>
        </div>
      ))}
    </div>
  );
}

export default RaceWinners;
