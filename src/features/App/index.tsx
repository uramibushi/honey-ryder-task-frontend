import React from 'react';
import { PrimaryButton } from 'components/ui-elements/Button/';

const handleClick : React.MouseEventHandler<HTMLButtonElement> = () => {
};

const App = () => (
  <div>
    <h1>Honey Ryder Task</h1>
    <div>
      <PrimaryButton onClick={handleClick}>保存</PrimaryButton>
    </div>
  </div>
);

export default App;
