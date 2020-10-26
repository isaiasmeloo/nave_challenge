import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logo from '../../../assets/logo.png'
import { Container, Input, Label, Button, TextButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />

      <View style={{ width: '100%', marginTop: 64 }}>
        <Label>E-mail</Label>
        <Input
          placeholder="E-mail"
          placeholderTextColor="#9E9E9E"
        />

        <Label>Senha</Label>
        <Input
          placeholder="Senha"
          placeholderTextColor="#9E9E9E"
          secureTextEntry
        />
      </View>

      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
    </Container>
  );
}
