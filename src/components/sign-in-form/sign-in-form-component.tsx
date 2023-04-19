import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input-component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user-action";

import "./sign-in-form-styles";

// set as default value which is create empty object for initial data
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  // config formfield and setform by desctructuring base object
  const [formField, setFormFields] = useState(defaultFormFields);
  const { email, password } = formField;

  // function to handle submit data from form button

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  // function to trigger changing FormInput
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // set formfield into new value which target name properties in form which default object is "" and FormInput new value by triggering onChange function.
    setFormFields({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-cointainer">
      <h2>Sign In To Access</h2>
      <span>Sign in your account with email or Google</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
