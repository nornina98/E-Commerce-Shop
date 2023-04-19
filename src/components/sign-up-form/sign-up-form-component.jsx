import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";
import { signUpStart } from "../../store/user/user-action";

import "./sign-up-form-styles.tsx";

// set as default value which is create empty object for initial data
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // config formfield and setform by desctructuring base object
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;
  const dispatch = useDispatch();

  // function to handle submit data from form button

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  // function to trigger changing FormInput
  const changeHandler = (event) => {
    const { name, value } = event.target;

    // set formfield into new value which target name properties in form which default object is "" and FormInput new value by triggering onChange function.
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-cointainer">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="google" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
