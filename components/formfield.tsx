import { ErrorMessage, Field } from "formik";

export default function FormField({
  label,
  name,
  placeholder,
  type = "text",
  as = "input",
  errorClass,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  as?: "input" | "textarea";
  errorClass?: string;
}) {
  return (
    <div className="form-field-container">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        as={as}
        className={errorClass}
      />
      <ErrorMessage name={name} component="p" className="error-message" />
    </div>
  );
}
