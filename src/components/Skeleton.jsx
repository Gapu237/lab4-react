
export default function Skeleton() {
  return (
    <div
      className="skeleton"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading person details"
    >
      <div className="skeleton-title"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
}
