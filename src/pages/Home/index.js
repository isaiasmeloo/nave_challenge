import React, { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import CardNaver from '../../components/CardNaver'

import { useAuth } from '../../hooks/auth'

import { Container, Title, ButtonAddNaver, TextButtonAddNaver, ContainerTitle } from './styles'

export default function Home() {
  const navigation = useNavigation()
  const [navers, setNavers] = useState([])

  const { user } = useAuth()

  useEffect(() => {
    api.get('navers')
    // api.get('navers', { headers: { Authorization: `Bearer ${user.token}` } })
      .then(response => {
        console.log('RESPOSTA ', response.data)
        if (response.status === 200) {
          setNavers(response.data)
        }
      })
      .catch(error => {
        console.log('ERROR ', error)
      })
  }, [])
  return (
    <Container>
      <ContainerTitle>
        <Title>Navers</Title>
        <ButtonAddNaver
          onPress={() => {
            navigation.toggleDrawer();
          }}
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
