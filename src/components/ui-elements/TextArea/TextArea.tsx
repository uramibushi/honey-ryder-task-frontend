import React from 'react';
import { TextAreaBase, TextAreaProps } from 'components/ui-elements/TextArea/TextAreaBase';

export const TextArea : React.FC<TextAreaProps> = ({
  id = undefined,
  value = undefined,
  maxRows = undefined,
  placeholder = undefined,
  onChange = undefined,
}) => (
  <TextAreaBase
    id={id}
    value={value}
    maxRows={maxRows}
    placeholder={placeholder}
    onChange={onChange}
  />
);
