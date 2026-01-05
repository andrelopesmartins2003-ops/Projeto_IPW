import { useEffect, useState } from "react";
import axios from "axios";
import "./Drivers.css";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/d081d6c2a843a910c64b59a0f76de16f/f1Api/drivers")
      .then((response) => {
        setDrivers(response.data.drivers);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching drivers:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading drivers...</p>;
  }

  return (
    <div className="drivers">
      <h2>Formula 1 Drivers 2026</h2>

      <div className="driver-list">
        {drivers.map((driver) => (
          <div className="driver-card" key={driver.id}>
            <img src={driver.image} alt={driver.name} />

            <h3>{driver.name}</h3>
            <p>
              <strong>Nationality:</strong> {driver.nationality}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drivers;

