const SignUpForm = () => {
  return (
    <div>
      <h1>SIGN UP FORM</h1>

      <form onSubmit={() => {}}>
        <label>DisplayName</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />
      </form>
      <button type="submit">Sign Up</button>
    </div>
  );
};

export default SignUpForm;
