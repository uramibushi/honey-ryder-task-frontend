import React from 'react';
import { PrimaryButton } from 'components/ui-elements/Button/';
import { InputField } from 'components/ui-elements/InputField';
import Stack from '@mui/material/Stack';

const handleClick : React.MouseEventHandler<HTMLButtonElement> = () => {
};

const App = () => (
  <div>
    <h1>Honey Ryder Task</h1>
    <div>
      <Stack spacing={2}>
        <InputField label='input1' />
        <InputField label='input2' />
        <InputField label='input3' />
        <PrimaryButton onClick={handleClick}>保存</PrimaryButton>
      </Stack>
    </div>
  </div>
);

export default App;
