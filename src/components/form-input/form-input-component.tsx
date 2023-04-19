import { FormInputLabel, Input, Group } from "./form-input-style";
import { FC, InputHTMLAttributes } from "react";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
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
