import React from 'react';
import { Button, TextButton, Icon } from './styles';

const ButtonComponent = ({ text, textColor, icon, white, ...props }) => {
  return (
    <Button white={white} {...props}>
      <Icon white={white} name={icon} size={18} />
      <TextButton white={white} textColor={textColor}>{text}</TextButton>
    </Button>
  );
}

export default ButtonComponent;
