import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, FlatList, Text, useColorScheme } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, NaverName, NaverJobRole, FooterButtons } from './styles';

import noData from '../../assets/no_data.png';
import noImage from '../../assets/no_image.png';

import api from '../../services/api';
import ModalComponent from '../Modal';

export default function CardNaver() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const theme = useColorScheme()

  const [modalConfirmation, setModalConfirmation] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [navers, setNavers] = useState([])
  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {
    loadNavers()

  }, [isFocused])

  async function loadNavers() {
    setIsLoading(true)
    try {
      const response = await api.get('navers')

      if (response.status === 200) {
        setNavers(response.data)
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/navers/${id}`)

      if (response.status === 200) {
        setModalConfirmation(false)
        setModalVisible(true)
      } else {
        setModalConfirmation(false)
        setModalVisible(false)
      }

    } catch (error) {
      setModalConfirmation(false)
      setModalVisible(false)
      console.log(error)
    }
  }

  function onDismiss() {
    loadNavers()
    setModalVisible(false)
    setModalConfirmation(false)
  }

  function handleEdit(id) {
    navigation.navigate('Naver', {
      id
    })
  }

  function _renderItem(naver) {
    return (
      <View>
        <ModalComponent
          modalVisible={modalConfirmation || modalVisible}
          title={modalConfirmation ? "Excluir naver" : "Naver excluído"}
          message={modalConfirmation ? "Tem certeza que deseja excluir este naver?" : "Naver excluído com sucesso!"}
          onDismiss={onDismiss}
          onDelete={() => handleDelete(naver.id)}
          showOptions={modalConfirmation}
        />
        <Container key={naver.id} onPress={() => {
          navigation.navigate('NaverDetail', { naverId: naver.id })
        }}>
          <Image
            defaultSource={noImage}
            source={{ uri: naver?.url }}
            style={{ height: 156, width: 156 }}
          />

          <NaverName>{naver.name}</NaverName>
          <NaverJobRole>{naver.job_role}</NaverJobRole>
        </Container>

        <FooterButtons>
          <TouchableOpacity onPress={() => setModalConfirmation(true)}>
            <Icon name="trash" size={18} color={theme === "dark" ? "#FFFFFF" : '#212121'} style={{ marginRight: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEdit(naver.id)}>
            <Icon name="edit-2" size={18} color={theme === "dark" ? "#FFFFFF" : '#212121'} />
          </TouchableOpacity>
        </FooterButtons>
      </View>
    )
  }

  return (
    <>
      {(navers && navers.length === 0) && !isLoading
        ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
              marginBottom: 50
            }}>Ainda não temos Navers cadastrados!</Text>
            <Image
              source={noData}
              style={{
                maxWidth: 293,
                maxHeight: 306
              }}
            />
          </View>
        )
        : (
          <FlatList
            numColumns={2}
            keyExtractor={item => item.id}
            data={navers}
            columnWrapperStyle={{
              justifyContent: 'space-between'
            }}
            style={{ width: '100%' }}
            renderItem={({ item }) => _renderItem(item)}
            showsVerticalScrollIndicator={false}
          />
        )
      }
    </>
  );
}
