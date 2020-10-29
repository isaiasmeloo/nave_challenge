import React from 'react'
import { useNavigation } from '@react-navigation/native'

import CardNaver from '../../components/CardNaver'

import { Container, Title, ButtonAddNaver, TextButtonAddNaver, ContainerTitle } from './styles'

export default function Home() {
  const navigation = useNavigation()

  return (
    <Container>
      <ContainerTitle>
        <Title>Navers</Title>
        <ButtonAddNaver
          onPress={() => { navigation.navigate('Naver') }}
        >
          <TextButtonAddNaver>Adicionar naver</TextButtonAddNaver>
        </ButtonAddNaver>
      </ContainerTitle>

      <CardNaver />
    </Container>
  )
}
