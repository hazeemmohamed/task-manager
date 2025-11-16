import { useState } from "react";

export default function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function reset() {
    setFormData(initialValues);
  }

  return { formData, setFormData, handleChange, reset };
}
