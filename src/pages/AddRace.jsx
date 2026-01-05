import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddRace() {
  const [form, setForm] = useState({
    year: "",
    racename: "",
    winner: "",
    team: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/races", { race: form }).then(() => {
      navigate("/backoffice");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Race</h2>

      <input name="year" placeholder="Year" onChange={handleChange} />
      <input name="racename" placeholder="Race Name" onChange={handleChange} />
      <input name="winner" placeholder="Winner" onChange={handleChange} />
      <input name="team" placeholder="Team" onChange={handleChange} />

      <button type="submit">Save</button>
    </form>
  );
}

export default AddRace;
