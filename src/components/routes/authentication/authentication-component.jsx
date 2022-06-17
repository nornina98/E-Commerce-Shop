import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase-utils";

import SignUpForm from "../../sign-up-form/sign-up-form-component.jsx";

import SignInForm from "../../sign-in-form/sign-in-form-component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Here</h1>
      <button onClick={logGoogleUser}>Sign Here</button>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
