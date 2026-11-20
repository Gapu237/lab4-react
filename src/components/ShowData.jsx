
export default function ShowData({ data }) {
  if (!data) return null;

  return (
    <section className="show-data" aria-live="polite">
      <h2>ShowData - JSON Inspector</h2>
      <p>Form submitted successfully!</p>

      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </section>
  );
}
