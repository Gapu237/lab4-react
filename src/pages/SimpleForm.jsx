
import { FormProvider, useFormContext } from "../context/FormContext";
import InputField from "../components/InputField";

function FormContent() {
  const {
    formData,
    errors,
    isValid,
    updateField,
    submitForm,
    submittedData
  } = useFormContext();

  function handleChange(event) {
    updateField(event.target.name, event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitForm();
  }

  return (
    <section className="exercise-form">
      <h1>Exercise 1.3 - Form Validation</h1>

      <p>
        Context-driven validation without useEffect.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>

      {submittedData && (
        <p className="success-message" role="status">
          Form submitted successfully!
        </p>
      )}
    </section>
  );
}

export default function SimpleForm() {
  return (
    <FormProvider>
      <FormContent />
    </FormProvider>
  );
}
