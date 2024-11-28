import * as y from "yup";

export const formFields = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "Jane",
    validation: y.string().required("Please enter your first name"),
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Doe",
    validation: y.string().required("Please enter your last name"),
  },
  {
    label: "Email",
    name: "email",
    placeholder: "janedoe@gmail.com",
    type: "email",
    validation: y
      .string()
      .email("Invalid email format")
      .required("Please enter your email address"),
  },
  {
    label: "Message",
    name: "message",
    placeholder: "Write your message here...",
    as: "textarea",
    validation: y
      .string()
      .max(250, "Message cannot exceed 200 characters")
      .required("Enter your message"),
  },
];
