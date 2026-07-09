import { STATUSES } from "../App.jsx";

export default function StatusColumn({ status, applications, onMove, onRemove }) {
  return (
    <section className="column">
      <h2>
        {status} <span className="count">{applications.length}</span>
      </h2>
      {applications.map((app) => (
        <article key={app.id} className="card">
          <strong>{app.company}</strong>
          <span>{app.role}</span>
          <div className="actions">
            <select
              value={app.status}
              onChange={(e) => onMove(app.id, e.target.value)}
              aria-label="Move to status"
            >
              {STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <button onClick={() => onRemove(app.id)} aria-label="Remove">
              ✕
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
