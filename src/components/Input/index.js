import React from 'react';

import { Container, Label, Input } from './styles';

const InputComponent = ({ label, name, onChangeText, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        placeholder={label}
        placeholderTextColor="#9E9E9E"
        onChangeText={onChangeText}
        {...rest}
      />
    </Container>
  );
}

export default InputComponent;
