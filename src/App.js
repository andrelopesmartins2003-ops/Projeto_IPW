import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RaceWinners from "./pages/RaceWinners"; 
import Login from "./pages/Login";
import Drivers from "./pages/Drivers"; 
import Teams from "./pages/Teams";
import WorldChampions from "./pages/DriverWorldChampion";
import Constructors from "./pages/Constructors";
import Backoffice from "./pages/Backoffice";
import AddRace from "./pages/AddRace";
import EditRace from "./pages/EditRace";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/races" element={<RaceWinners />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/worldchampions" element={<WorldChampions />} />
        <Route path="/constructors" element={<Constructors />} />
        <Route path="/backoffice" element={<ProtectedRoute><Backoffice /></ProtectedRoute>} />
        <Route path="/backoffice/add" element={<ProtectedRoute><AddRace /></ProtectedRoute>} />
        <Route path="/backoffice/edit/:id" element={<ProtectedRoute><EditRace /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
