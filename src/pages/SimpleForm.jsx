
import { useFormContext } from "../context/FormContext";
import { FormProvider } from "../context/FormProvider";
import InputField from "../components/InputField";
import ShowData from "../components/ShowData";

// Exercise 1.3 - Sprint 2
// Context-driven Form Validation

function FormContent() {
  const {
    formData,
    errors,
    isValid,
    updateField,
    submitForm,
    submittedData
  } = useFormContext();

  // Update form values
  function handleChange(event) {
    updateField(event.target.name, event.target.value);
  }

  // Submit form without page reload
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
          type="text"
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

        <button
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </form>

      {/* Live JSON Inspector */}
      <ShowData data={submittedData} />
    </section>
  );
}

// Wrap form with Context Provider
export default function SimpleForm() {
  return (
    <FormProvider>
      <FormContent />
    </FormProvider>
  );
}
