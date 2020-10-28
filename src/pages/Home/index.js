import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'

import api from '../../services/api'
import CardNaver from '../../components/CardNaver'

import { Container, Title, ButtonAddNaver, TextButtonAddNaver, ContainerTitle } from './styles'

export default function Home() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const [navers, setNavers] = useState([])

  useEffect(() => {
    api.get('navers')
      .then(response => {
        console.log('RESPOSTA ', response.data)
        if (response.status === 200) {
          setNavers(response.data)
        }
      })
      .catch(error => {
        console.log('ERROR ', error)
      })
  }, [isFocused])

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

      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={navers}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        style={{ width: '100%' }}
        renderItem={({ item }) => <CardNaver naver={item} />}
      />
    </Container>
  )
}
