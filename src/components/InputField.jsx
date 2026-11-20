
import { useState } from "react";

export default function InputField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text"
}) {
  const [touched, setTouched] = useState(false);
  const errorId = `${name}-error`;
  const showError = touched && Boolean(error);

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={() => setTouched(true)}
        aria-invalid={showError}
        aria-describedby={
          showError ? errorId : undefined
        }
      />

      {showError && (
        <p
          id={errorId}
          className="error-message"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
