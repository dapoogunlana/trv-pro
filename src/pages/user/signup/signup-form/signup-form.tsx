
import React, { useEffect, useState } from "react";
import { Formik, FormikProps, FormikValues } from "formik";
// import * as Yup from 'yup';
import { sendRequest } from "../../../../services/utils/request";
import { toast } from "react-toastify";
import { regexConstants } from "../../../../services/constants/validation-regex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signup-form.scss";

function AdminSignupForm({poceedToVerify, switchToLogin}: {poceedToVerify?: Function, switchToLogin?: Function}) {
  const [response, setResponse] = useState<any>();
  const [showPassword, setShowPassword] = useState(false);

  const submitRequest = (values: any, controls: any) => {
    sendRequest(
      {
        url: "user-auth/signup",
        method: "POST",
        body: {
          first_name: values.first_name,
          last_name: values.last_name,
          // name: `${values.first_name} ${values.last_name}`,
          email: values.email,
          password: values.password,
          referred_by: values.referred_by,
        },
      },
      (res: any) => {
        sessionStorage.setItem("userId", res.userId);
        toast.success(res.message);
        if(poceedToVerify) {
          // sendRequest(
          //   {
          //     url: "user-auth/resend-verification-otp",
          //     method: "POST",
          //     body: {
          //       userId: res.userId,
          //     },
          //   },
          //   (res: any) => {
          //     poceedToVerify();
          //     controls.setSubmitting(false);
          //   },
          //   () => {
          //     controls.setSubmitting(false);
          //   }
          // );
          poceedToVerify();
        }
        controls.setSubmitting(false);
      },
      (err: any) => {
        controls.setSubmitting(false);
        toast.error(err.error);
        setResponse(err.error || err.message);
      }
    );
  };

  const signupWithGoogle = () => {
    toast('Google signup under development')
  }

  const signupWithFacebook = () => {
    toast('Facebook signup under development')
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goToLogin = () => {
    if(switchToLogin){
      switchToLogin();
    }
  }

  const validate = (values: FormikValues) => {
    const errors: any = {};

    if (!values.first_name) {
      errors.first_name = "First name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexConstants.emailPattern.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 3) {
      errors.password = "Password can not be lass than 3 characters";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Confirming password is required";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Password and confirmation do not match";
    }
    return errors;
  };

  useEffect(() => {});

  return (
    <div className="dialogue-container">
      <h6>Sign Up</h6>
      <p className="brief">Enter details to create your account</p>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
          referred_by: "",
        }}
        validate={(value) => validate(value)}
        onSubmit={(values, controls) =>
          submitRequest(values, controls)
        }>
        {(
          props: FormikProps<{
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            confirm_password: string;
            referred_by: string;
          }>
        ) => {
          const {
            values,
            errors,
            touched,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
          } = props;
          return (
            <form action="" className="row" onSubmit={handleSubmit} onClick={() => setResponse('')}>
              <div className="col-md-6">
                <div className="reg-card">
                  <label className="text-left">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    id="first_name"
                    value={values.first_name}
                    onBlur={handleBlur}
                    onFocus={() => (errors.first_name = "")}
                    onChange={handleChange}
                    className={
                      errors.first_name && touched.first_name ? "im-error" : ""
                    }
                  />
                  {errors.first_name && touched.first_name && (
                    <p className="reduced error-popup pt-1 mb-0">
                      {errors.first_name}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="reg-card">
                  <label className="text-left">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    id="last_name"
                    value={values.last_name}
                    onBlur={handleBlur}
                    onFocus={() => (errors.last_name = "")}
                    onChange={handleChange}
                    className={
                      errors.last_name && touched.last_name ? "im-error" : ""
                    }
                  />
                  {errors.last_name && touched.last_name && (
                    <p className="reduced error-popup pt-1 mb-0">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="reg-card">
                  <label className="text-left">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onFocus={() => (errors.email = "")}
                    onChange={handleChange}
                    className={
                      errors.email && touched.email ? "im-error" : ""
                    }
                  />
                  {errors.email && touched.email && (
                    <p className="reduced error-popup pt-1 mb-0">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="reg-card">
                  <label className="text-left">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    id="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onFocus={() => (errors.password = "")}
                    onChange={handleChange}
                    className={
                      errors.password && touched.password ? "im-error" : ""
                    }
                  />
                  <div className="password-shower">
                    {
                      showPassword ?
                      <FontAwesomeIcon icon={'eye-slash'} onClick={toggleShowPassword}/> :
                      <FontAwesomeIcon icon={'eye'} onClick={toggleShowPassword}/>
                    }
                  </div>
                  {errors.password && touched.password && (
                    <p className="reduced error-popup pt-1 mb-0">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="reg-card">
                  <label className="text-left">Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    id="confirm_password"
                    value={values.confirm_password}
                    onBlur={handleBlur}
                    onFocus={() => (errors.confirm_password = "")}
                    onChange={handleChange}
                    className={
                      errors.confirm_password && touched.confirm_password ? "im-error" : ""
                    }
                  />
                  <div className="password-shower">
                    {
                      showPassword ?
                      <FontAwesomeIcon icon={'eye-slash'} onClick={toggleShowPassword}/> :
                      <FontAwesomeIcon icon={'eye'} onClick={toggleShowPassword}/>
                    }
                  </div>
                  {errors.confirm_password && touched.confirm_password && (
                    <p className="reduced error-popup pt-1 mb-0">
                      {errors.confirm_password}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-center pt-4 pb-2">
                <button
                  type="submit"
                  className="btn btn-con mx-0"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Processing.." : "Sign up"}
                </button>
                {response && <div className="reduced error-popup">{response}</div>}
              </div>
            </form>
          );
        }}
      </Formik>
      <div className="row pt-3 pb-2">
        <div className="col-md-6 py-2">
          <div className="social-signup" onClick={signupWithGoogle}>
            <p className="mb-0">
              <FontAwesomeIcon icon={['fab', 'google']} className="ic-google" />
              <span>Sign up with Google</span>
            </p>
          </div>
        </div>
        <div className="col-md-6 py-2">
          <div className="social-signup" onClick={signupWithFacebook}>
            <p className="mb-0">
              <FontAwesomeIcon icon={['fab', 'facebook']} className="ic-facebook" />
              <span>Sign up with Google</span>
            </p>
          </div>
        </div>
        <div className="col-md-12 py-2">
            <p className="mb-0 alternate-action">
              Already have an account? 
              <span onClick={goToLogin}> Sign in</span>
            </p>
        </div>
      </div>
    </div>
  );
}

export default AdminSignupForm;
