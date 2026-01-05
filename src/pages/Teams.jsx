import { useEffect, useState } from "react";
import axios from "axios";
import "./Teams.css";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/d081d6c2a843a910c64b59a0f76de16f/f1Api/teams")
      .then((response) => {
        setTeams(response.data.teams);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading teams...</p>;
  }

  return (
    <div className="teams">
      <h2>Formula 1 Teams 2026</h2>

      <div className="team-list">
        {teams.map((team) => (
          <div className="team-card" key={team.id}>
            <img src={team.image} alt={team.name} />

            <h3>{team.name}</h3>
            <p>
              <strong>Power Unit:</strong> {team.powerUnit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
