import React, {FC} from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {}

const Button: FC<ButtonProps> = ({sx, ...props}) => {
  return <MuiButton {...props} />;
};

export default Button;
