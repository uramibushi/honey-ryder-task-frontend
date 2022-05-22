import React from 'react';
import { TextFieldBase, TextFieldProps } from 'components/ui-elements/TextField/TextFieldBase';

export const DateField : React.FC<TextFieldProps> = ({
  id = undefined,
  label = undefined,
  value = undefined,
  onChange = undefined,
}) => (
  <TextFieldBase
    type="date"
    id={id}
    label={label}
    value={value}
    onChange={onChange}
  />
);
