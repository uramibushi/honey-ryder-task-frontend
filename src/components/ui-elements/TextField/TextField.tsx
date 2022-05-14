import React, { HTMLInputTypeAttribute } from 'react';
import TextFieldBase from 'components/ui-elements/TextField/TextFieldBase';

type TextFieldPropsType = {
  type?: HTMLInputTypeAttribute,
  id?: string,
  label?: string,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
}

const TextField : React.FC<TextFieldPropsType> = ({
  type = 'text',
  id = undefined,
  label = undefined,
  value = undefined,
  onChange = undefined,
}) => (
  <TextFieldBase
    type={type}
    id={id}
    label={label}
    value={value}
    onChange={onChange}
  />
);

export default TextField;
