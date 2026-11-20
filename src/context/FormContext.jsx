
import {
  createContext,
  useContext,
  useState
} from "react";

// Exercise 1.3 - Sprint 2
// Shared Form Context

export const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submittedData, setSubmittedData] =
    useState(null);

  // Synchronous validation without useEffect
  const errors = {
    name:
      formData.name.trim().length < 3
        ? "Name must contain at least 3 characters"
        : "",

    email:
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
        ? "Please enter a valid email"
        : ""
  };

  const isValid = Object.values(errors).every(
    (error) => error === ""
  );

  function updateField(name, value) {
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setSubmittedData(null);
  }

  function submitForm() {
    if (!isValid) return;

    setSubmittedData({
      name: formData.name.trim(),
      email: formData.email.trim()
    });
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        errors,
        isValid,
        updateField,
        submitForm,
        submittedData
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormContext must be used within FormProvider"
    );
  }

  return context;
}
