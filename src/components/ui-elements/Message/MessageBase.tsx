import React from 'react';
import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  AlertProps as MuiAlertProps,
} from '@mui/material';

export type MessagePropsType = MuiAlertProps;

export const MessageBase: React.FC<MessagePropsType> = ({
  severity,
  title,
  children,
}) => (
  <MuiAlert severity={severity}>
    <MuiAlertTitle>{title}</MuiAlertTitle>
    {children}
  </MuiAlert>
);
