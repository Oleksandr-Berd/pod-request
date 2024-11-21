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
            <SC.RequestFormCustom>
              <Field
                type="email"
                name="email"
                placeholder="Email address"
                style={{
                  borderColor:
                    touched.email && errors.email ? "#FF5466" : "#C2D3FF",
                }}
              />
              <ErrorMessage name="email">
                {(msg) => (msg ? <p>{msg}</p> : null)}
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
