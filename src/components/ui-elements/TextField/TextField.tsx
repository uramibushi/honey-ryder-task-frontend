import React from 'react';
import TextFieldBase from 'components/ui-elements/TextField/TextFieldBase';

type TextFieldPropsType = {
  id?: string,
  label?: string,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
}

const TextField : React.FC<TextFieldPropsType> = ({
  id = undefined,
  label = undefined,
  value = undefined,
  onChange = undefined,
}) => (
  <TextFieldBase
    type="text"
    id={id}
    label={label}
    value={value}
    onChange={onChange}
  />
);

export default TextField;
