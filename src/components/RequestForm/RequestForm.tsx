import { ErrorMessage, Field, Form, Formik } from "formik";

import * as SC from "./RequestFormStyled";

import { validSchema } from "../../utils/validation";
import { IProps } from "../../utils/interfaces";

const RequestForm: React.FC<IProps> = ({ handleSubmit }) => {
  return (
    <SC.FormContent>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          handleSubmit(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form noValidate>
            {isSubmitting ? "Loading..." : null}
            <SC.RequestFormCustom>
              <Field
                type="email"
                name="email"
                placeholder="Email address"
                style={{
                  borderColor:
                    touched.email && errors.email ? "#fb3e3e" : "#C2D3FF",
                }}
              />
              <ErrorMessage name="email">
                {(msg) => (msg ? <SC.ErrorCustom>{msg}</SC.ErrorCustom> : null)}
              </ErrorMessage>
            </SC.RequestFormCustom>
            <SC.SubmitButton type="submit">Request Access</SC.SubmitButton>
          </Form>
        )}
      </Formik>
    </SC.FormContent>
  );
};

export default RequestForm;
