import { useEffect, useMemo, useState } from "react";
import ApplicationForm from "./components/ApplicationForm.jsx";
import StatusColumn from "./components/StatusColumn.jsx";

export const STATUSES = ["Saved", "Applied", "Interviewing", "Offer", "Rejected"];
const STORAGE_KEY = "job-applications";

export default function App() {
  const [applications, setApplications] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const byStatus = useMemo(() => {
    const groups = Object.fromEntries(STATUSES.map((s) => [s, []]));
    for (const app of applications) groups[app.status].push(app);
    return groups;
  }, [applications]);

  function addApplication({ company, role }) {
    setApplications((apps) => [
      { id: crypto.randomUUID(), company, role, status: "Saved", createdAt: Date.now() },
      ...apps,
    ]);
  }

  function moveApplication(id, status) {
    setApplications((apps) => apps.map((a) => (a.id === id ? { ...a, status } : a)));
  }

  function removeApplication(id) {
    setApplications((apps) => apps.filter((a) => a.id !== id));
  }

  return (
    <main className="app">
      <h1>Job Application Tracker</h1>
      <p className="subtitle">{applications.length} applications tracked</p>
      <ApplicationForm onAdd={addApplication} />
      <div className="board">
        {STATUSES.map((status) => (
          <StatusColumn
            key={status}
            status={status}
            applications={byStatus[status]}
            onMove={moveApplication}
            onRemove={removeApplication}
          />
        ))}
      </div>
    </main>
  );
}
