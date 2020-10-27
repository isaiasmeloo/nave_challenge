import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import CardNaver from '../../components/CardNaver'

export default function Home() {
  const navigation = useNavigation()
  const [navers, setNavers] = useState([])

  useEffect(() => {
    api.get('navers',
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFmZWMyNmQ1LTY4NTItNDMzNy04MTg5LTg5Yzc3YThkNzMzYyIsImVtYWlsIjoiaXNhaWFzbWVsb0BuYXZlLnJzIiwiaWF0IjoxNjAzNzMwMDkyfQ.xltf7Qtib_mIdGc_EIEVafigBdzhXZ7kL82qFbaLay0'
        }
      }
    )
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
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 35,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <Text style={{ fontSize: 22, fontWeight: '600' }}>Navers</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#212121',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Text style={{ color: '#FFFFFF' }}>Adicionar naver</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={navers}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        style={{
          width: '100%'
        }}
        renderItem={({ item }) => <CardNaver naver={item} />}
      />
    </View>
  )
}
