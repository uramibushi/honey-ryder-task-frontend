import React, { HTMLInputTypeAttribute } from 'react';
import { TextField as MuiTextField } from '@mui/material';

type TextFieldBasePropsType = {
  type?: HTMLInputTypeAttribute,
  id?: string,
  label?: string,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
}

const TextFieldBase : React.FC<TextFieldBasePropsType> = ({
  type = 'text',
  id = undefined,
  label = undefined,
  value = undefined,
  onChange = undefined,
}) => (
  <MuiTextField
    variant="standard"
    type={type}
    id={id}
    label={label}
    value={value}
    onChange={onChange}
  />
);

export default TextFieldBase;
