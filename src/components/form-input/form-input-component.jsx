import { FormInputLabel, Input, Group } from "./form-input-style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
/* className={`${otherProps.value.length ? "shrink" : " "}`}
if something have type in input which length > 0 or it true then append classname "shrink" otherwise it empty string -> "";
*/
