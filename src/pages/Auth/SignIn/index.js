import React, { useCallback, useRef, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';

import logo from '../../../assets/logo.png'
import { useAuth } from '../../../hooks/auth';

import { Container, Input, Label, Button, TextButton } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const { signIn } = useAuth()

  async function handleSignIn(){
    try {
      console.log('HANDLE SIGN IN ' + email, password)

      const retorno = await signIn(email, password)
      console.log('RETORNO ', retorno)
    } catch (error) {
      console.log('ERROR ', error)
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Image source={logo} />

        <View style={{ width: '100%', marginTop: 64 }}>
          <Label>E-mail</Label>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current?.focus()
            }}
            onChangeText={text => setEmail(text)}

            placeholder="E-mail"
            placeholderTextColor="#9E9E9E"
          />

          <Label>Senha</Label>
          <Input
            ref={passwordRef}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSignIn}
            onChangeText={text => setPassword(text)}

            placeholder="Senha"
            placeholderTextColor="#9E9E9E"
          />
        </View>

        <Button onPress={handleSignIn}>
          <TextButton>Entrar</TextButton>
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
}
