import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps;

export const TextFieldBase : React.FC<TextFieldProps> = ({
  type = 'text',
  id = undefined,
  label = undefined,
  value = undefined,
  multiline = false,
  minRows = undefined,
  maxRows = undefined,
  onChange = undefined,
}) => (
  <MuiTextField
    variant="outlined"
    type={type}
    id={id}
    label={label}
    value={value}
    multiline={multiline}
    minRows={minRows}
    maxRows={maxRows}
    onChange={onChange}
  />
);
