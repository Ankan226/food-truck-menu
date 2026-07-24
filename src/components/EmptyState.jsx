import "./EmptyState.css";

function EmptyState({ title, message }) {
  return (
    <div className="empty-state" role="status">
      <p className="empty-state__title">{title}</p>
      <p className="empty-state__message">{message}</p>
    </div>
  );
}

export default EmptyState;