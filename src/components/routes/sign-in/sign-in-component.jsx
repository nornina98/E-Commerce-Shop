import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase-utils";

import SignUpForm from "../../sign-up-form/sign-up-form-component.jsx";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Here</h1>
      <button onClick={logGoogleUser}>Sign Here</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
