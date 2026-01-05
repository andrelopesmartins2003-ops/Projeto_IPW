import { useEffect, useState } from "react";
import axios from "axios";
import "./Constructors.css";

function ConstructorsChampionship() {
  const [constructors, setConstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/d081d6c2a843a910c64b59a0f76de16f/f1Api/constructorsChampions")
      .then((response) => {
        setConstructors(response.data.constructorsChampions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching constructors:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading constructors champions...</p>;
  }

  return (
    <div className="constructors">
      <h2>🏆 Constructors Championship</h2>

      <div className="constructor-list">
        {constructors.map((item) => (
          <div className="constructor-card" key={item.id}>
            <img src={item.image} alt={item.team} />

            <h3>{item.year}</h3>
            <p>
              <strong>Team:</strong> {item.team}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConstructorsChampionship;
