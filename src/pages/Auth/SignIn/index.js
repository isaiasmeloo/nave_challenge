import React, { useRef, useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, useColorScheme, View } from 'react-native';

import logo from '../../../assets/logo.png'
import logoWhite from '../../../assets/logoWhite.png'

import ButtonComponent from '../../../components/Button';
import ModalComponent from '../../../components/Modal';

import { useAuth } from '../../../hooks/auth';

import { Container, Input, Label, Loading } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const passwordRef = useRef(null)

  const { signIn } = useAuth()

  const theme = useColorScheme()

  async function handleSignIn() {
    setIsLoading(true)
    try {
      const response = await signIn(email, password)
      if (!response) {
        setModalVisible(true)
      }
      setIsLoading(false)
    } catch (error) {
      setModalVisible(true)
      setIsLoading(false)
      console.log(error)
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? 'padding' : undefined}
      enabled
    >
      <ModalComponent
        modalVisible={modalVisible}
        title="Erro"
        message="Erro ao fazer login, verifique suas credenciais!"
        onDismiss={() => setModalVisible(false)}
      />
      {isLoading && (
        <Loading>
          <ActivityIndicator color={theme === "dark" ? '#fff' : '#212121'} size="large" />
        </Loading>
      )}
      <Container>
        <Image source={theme === "dark" ? logoWhite : logo} />

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
        <ButtonComponent
          onPress={handleSignIn}
          text="Entrar"
          style={{ width: '100%', marginTop: 40 }}
        />
      </Container>
    </KeyboardAvoidingView>
  );
}
