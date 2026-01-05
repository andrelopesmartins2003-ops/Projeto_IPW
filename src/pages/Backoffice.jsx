import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Backoffice() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/d081d6c2a843a910c64b59a0f76de16f/f1Api/races")
      .then((response) => {
        setRaces(response.data.races);
      })
      .catch((error) => {
        console.error("Error fetching races:", error);
      });
  }, []);
 


  return (
    <div style={{ padding: "20px" }}>
      <h2>🏁 Backoffice – Races</h2>

      <Link to="/backoffice/add">
        <button>➕ Add Race</button>
      </Link>

      <hr />

      {races.length === 0 && <p>No races found.</p>}

      {races.map((race) => (
        <div key={race.id} style={{ marginBottom: "10px" }}>
          <strong>{race.year}</strong> – {race.raceName}
          <br />

          <Link to={`/backoffice/edit/${race.id}`}>
            <button>✏️ Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Backoffice;

