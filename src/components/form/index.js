import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CustomForm = (props) => {
  return (
    <Formik>
      {({ isSubmitting }) => (
        <Form>
          {props.children}
          {/* <button type="submit" disabled={isSubmitting}>
            {props.btn}
          </button> */}
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
