import { useEffect, useState } from "react";

export default function Skeleton() {
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    // Let assistive technology register the live region before adding text.
    const timer = window.setTimeout(() => {
      setAnnouncement("Loading person details...");
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="skeleton" aria-busy="true">
        <h2 aria-hidden="true"><span className="skeleton-title" /></h2>
        <dl className="person-details" aria-hidden="true">
          <dt><span className="skeleton-line" /></dt>
          <dd><span className="skeleton-line" /></dd>
          <dt><span className="skeleton-line" /></dt>
          <dd><span className="skeleton-line" /></dd>
        </dl>
      </div>
      <span
        role="status"
        aria-live="polite"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap"
        }}
      >
        {announcement}
      </span>
    </>
  );
}
