import { useState } from "react";

// set as default value which is create empty object for initial data
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // config formfield and setform by desctructuring base object
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  console.log(formField);

  // function to trigger changing input
  const handleChange = (event) => {
    const { name, value } = event.target;

    // set formfield into new value which target name properties in form which default object is "" above and input new value by triggering onChange function.
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <h1>SIGN UP FORM</h1>
      <form onSubmit={() => {}}>
        <label>DisplayName</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </form>
      <button type="submit">Sign Up</button>
    </div>
  );
};

export default SignUpForm;
