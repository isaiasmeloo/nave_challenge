import React from 'react';
import { Text } from 'react-native';
import { Button, TextButton } from './styles';

const ButtonComponent = ({ text, textColor, ...props }) => {
  return (
    <Button {...props}>
      <TextButton textColor={textColor}>{text}</TextButton>
    </Button>
  );
}

export default ButtonComponent;
