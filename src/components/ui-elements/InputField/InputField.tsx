import React, { HTMLInputTypeAttribute } from 'react';
import TextField from '@mui/material/TextField';

export type InputFieldPropsType = {
  type?: HTMLInputTypeAttribute,
  id?: string,
  label?: string,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
}

const InputField : React.FC<InputFieldPropsType> = ({
  type = 'text',
  id = undefined,
  label = undefined,
  value = undefined,
  onChange = undefined,
}) => (
  <TextField
    variant="standard"
    type={type}
    id={id}
    label={label}
    value={value}
    onChange={onChange}
  />
);

export default InputField;
