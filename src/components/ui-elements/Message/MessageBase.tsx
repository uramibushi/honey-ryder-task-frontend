import React, { useState } from 'react';
import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  AlertProps as MuiAlertProps,
  Box,
  Collapse,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export type MessagePropsType = MuiAlertProps;

export const MessageBase: React.FC<MessagePropsType> = ({
  severity,
  title,
  children,
}) => {
  const [isOpend, setIsOpend] = useState(true);
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={isOpend}>
        <MuiAlert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsOpend(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <MuiAlertTitle>{title}</MuiAlertTitle>
          {children}
        </MuiAlert>
      </Collapse>
    </Box>
  );
};
