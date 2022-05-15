import React from 'react';
import { TextareaAutosize as MuiTextareaAutosize, TextareaAutosizeProps as MuiTextareaAutosizeProps } from '@mui/material';

export type TextAreaProps = MuiTextareaAutosizeProps;

export const TextAreaBase : React.FC<TextAreaProps> = ({
  id = undefined,
  value = undefined,
  maxRows = undefined,
  placeholder = undefined,
  onChange = undefined,
}) => (
  <MuiTextareaAutosize
    id={id}
    value={value}
    maxRows={maxRows}
    placeholder={placeholder}
    onChange={onChange}
  />
);
