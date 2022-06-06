import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase-utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Here</h1>
      <button onClick={logGoogleUser}>Sign Here</button>
    </div>
  );
};

export default SignIn;
