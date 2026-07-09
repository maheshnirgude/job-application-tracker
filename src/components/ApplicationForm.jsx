import { useState } from "react";

export default function ApplicationForm({ onAdd }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;
    onAdd({ company: company.trim(), role: role.trim() });
    setCompany("");
    setRole("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        aria-label="Company"
      />
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role title"
        aria-label="Role title"
      />
      <button type="submit">Add</button>
    </form>
  );
}
