import React from 'react';
import {
  TextFieldBase,
  TextFieldProps,
} from 'components/ui-elements/TextField/TextFieldBase';

export const TextArea: React.FC<TextFieldProps> = ({
  id = undefined,
  label = undefined,
  value = undefined,
  minRows = 4,
  maxRows = undefined,
  onChange = undefined,
}) => (
  <TextFieldBase
    type="text"
    id={id}
    label={label}
    value={value}
    multiline
    minRows={minRows}
    maxRows={maxRows}
    onChange={onChange}
  />
);
