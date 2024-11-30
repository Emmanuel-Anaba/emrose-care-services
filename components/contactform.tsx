"use client";
import * as y from "yup";
import clsx from "clsx";
import FormField from "./formfield";
import submitForm from "@/lib/submitForm";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { formFields } from "@/lib/lists";

export default function ContactForm() {
  const initialValues = formFields.reduce<Record<string, string>>(
    (values, { name }) => {
      values[name] = "";
      return values;
    },
    {}
  );

  const validationSchema = y.object(
    formFields.reduce<Record<string, y.AnySchema>>(
      (schema, { name, validation }) => {
        schema[name] = validation;
        return schema;
      },
      {}
    )
  );

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        try {
          await submitForm(values);
          toast.success("Message sent! 😊");
          resetForm();
        } catch {
          toast.error("Message not sent! 😓");
        }
      }}>
      {({ isSubmitting, errors, touched }) => (
        <Form>
          {formFields.map(({ label, name, placeholder, as }, i) => (
            <FormField
              errorClass={clsx(errors[name] && touched[name] && "input-error")}
              key={i}
              label={label}
              name={name}
              as={as as "input" | "textarea"}
              placeholder={placeholder}
            />
          ))}
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn mr-auto my-auto">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
