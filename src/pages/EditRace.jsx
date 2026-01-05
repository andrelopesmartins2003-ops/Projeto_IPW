import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditRace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    api.get(`/races/${id}`).then((res) => {
      setForm(res.data.race);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.put(`/races/${id}`, { race: form }).then(() => {
      navigate("/backoffice");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Race</h2>

      <input name="year" value={form.year || ""} onChange={handleChange} />
      <input
        name="racename"
        value={form.racename || ""}
        onChange={handleChange}
      />
      <input
        name="winner"
        value={form.winner || ""}
        onChange={handleChange}
      />
      <input
        name="team"
        value={form.team || ""}
        onChange={handleChange}
      />

      <button type="submit">Update</button>
    </form>
  );
}

export default EditRace;
