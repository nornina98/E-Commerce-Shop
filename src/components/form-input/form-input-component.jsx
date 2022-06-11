import "./form-input-style.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <span className="">
          <label
            className={`${
              otherProps.value.length ? "shrink" : " "
            } form-input-label`}
          >
            {label}
          </label>
        </span>
      )}
    </div>
  );
};

export default FormInput;

/* className={`${otherProps.value.length ? "shrink" : " "}`}
if something have type in input which length > 0 or it true then append classname "shrink" otherwise it empty string -> "";
*/
