import React, { FC } from 'react';
import ButtonBase from 'components/ui-elements/Button/ButtomBase';

type PrimaryButtonPropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const PrimaryButton: FC<PrimaryButtonPropsType> = ({ onClick, children }) => (
  <ButtonBase variant="contained" color="primary" onClick={onClick}>
    {children}
  </ButtonBase>
);

export default PrimaryButton;
