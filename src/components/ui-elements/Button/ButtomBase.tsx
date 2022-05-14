import React, { FC } from 'react';
import { Button } from '@mui/material';

type ButtonPropsType = {
  variant: 'text' | 'contained' | 'outlined' | undefined;
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const ButtonBase : FC<ButtonPropsType> = ({
  variant,
  color,
  onClick,
  children,
}) => (
  <Button
    variant={variant}
    color={color}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default ButtonBase;
