import React, { FC } from 'react';
import Button from '@mui/material/Button';

type PrimaryButtonPropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode,
}

const PrimaryButton : FC<PrimaryButtonPropsType> = ({ onClick, children }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
  >
    {children}
  </Button>
);

export default PrimaryButton;
