import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Link, Redirect } from "react-router-dom";
import { StyledInput, StyledForm, FormContainer } from "./Profile.styles";
import { setCurrentUser } from "../../redux/ActionCreators";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

const mapDispatchToProps = {
  setCurrentUser: (user) => setCurrentUser(user),
};

const mapStateToProps = (state) => ({
  isAuthUser: state.user.isAuthUser,
});

let SignUpForm = ({ setCurrentUser }) => {
  const [toHome, setToHome] = useState(false);

  return (
    <FormContainer>
      <div className="heading-cta">
        <h2>Sign Up</h2>
        <h4>The next big thing is just a project away </h4>
      </div>
      <Formik
        className="formik"
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length < 2) {
            errors.name = "Must be at least 2 characters";
          } else if (values.name.length > 15) {
            errors.name = "Must be 15 characters or less";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
              values.password
            )
          ) {
            errors.password =
              "Password must be 8 to 15 characters, contain one lowercase letter, one uppercase letter, one numeric digit, and one special character";
          }
          return errors;
        }}
        onSubmit={({ name, email, password }, { setSubmitting }) => {
          setTimeout(() => {
            setCurrentUser({
              name: name,
              email: email,
              password: password,
            });
            setToHome(true);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <button
              type="button"
              id="google-btn"
              className="form-btns"
              onClick={() => alert("Google sign in coming soon!")}
            >
              <div>
                <AiIcons.AiOutlineGoogle />
                <span>Sign up with Google</span>
              </div>
            </button>
            <button
              type="button"
              id="facebook-btn"
              className="form-btns"
              onClick={() => alert("Facebook sign in coming soon!")}
            >
              <div>
                <FaIcons.FaFacebookF />
                <span>Sign up with Facebook</span>
              </div>
            </button>
            <label htmlFor="name" className="name-label">
              <div>Name</div>
            </label>
            <StyledInput
              type="name"
              name="name"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <div id="name-error" className="error">
              {errors.name && touched.name && errors.name}
            </div>

            <label htmlFor="email" className="email-label">
              <div>Email</div>
            </label>
            <StyledInput
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div id="email-error" className="error">
              {errors.email && touched.email && errors.email}
            </div>

            <label htmlFor="password" className="pw-label">
              <div>Password</div>
            </label>
            <StyledInput
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div id="pw-error" className="error">
              {errors.password && touched.password && errors.password}
            </div>

            <button
              type="submit"
              id="submit-btn"
              className="form-btns"
              disabled={isSubmitting}
            >
              Create an Account
            </button>
            <div
              id="existing-user"
              onClick={() => alert("Permanent profiles coming soon!")}
            >
              Already have an account?{" "}
              <Link to="/signup" id="sign-in">
                Sign In
              </Link>
            </div>
          </StyledForm>
        )}
      </Formik>
      {toHome ? <Redirect to="/home" /> : null}
    </FormContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
