import React, { FC } from 'react';
import { Button as MuiButton } from '@mui/material';

type ButtonPropsType = {
  variant: 'text' | 'contained' | 'outlined' | undefined;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const ButtonBase: FC<ButtonPropsType> = ({
  variant,
  color,
  onClick,
  children,
}) => (
  <MuiButton variant={variant} color={color} onClick={onClick}>
    {children}
  </MuiButton>
);

export default ButtonBase;
