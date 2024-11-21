import * as Yup from "yup"

export const validSchema = Yup.object({}).shape({
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Email is required"),
});