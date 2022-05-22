import React from 'react';
import {
  MessageBase,
  MessagePropsType,
} from 'components/ui-elements/Message/MessageBase';

export const ErrorMessage: React.FC<MessagePropsType> = ({ children }) => {
  const title = 'エラーが発生しました';
  return (
    <MessageBase severity="error" title={title}>
      {children}
    </MessageBase>
  );
};
