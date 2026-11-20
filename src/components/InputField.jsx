
export default function InputField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text"
}) {
  const errorId = `${name}-error`;

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p id={errorId} className="error-message">
          {error}
        </p>
      )}
    </div>
  );
}
