import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2>🏎️ Formula 1 Past Winners</h2>
      <p>Explore race winners by year, driver or team</p>

      <Link to="/races" className="btn">
        View Race Winners
      </Link>
    </div>
  );
}

export default Home;
