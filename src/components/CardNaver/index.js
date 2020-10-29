import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, FlatList } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, NaverName, NaverJobRole } from './styles';

import api from '../../services/api';
import ModalComponent from '../Modal';

const CardNaver = () => {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const [modalConfirmation, setModalConfirmation] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [navers, setNavers] = useState([])

  useEffect(() => {
    loadNavers()

  }, [isFocused])

  function loadNavers() {
    api.get('navers')
      .then(response => {
        console.log('RESPOSTA 27', response.data)
        if (response.status === 200) {
          setNavers(response.data)
        }
      })
      .catch(error => {
        console.log('ERROR 34', error)
      })
  }

  async function handleDelete(id) {
    console.log('ID ', id)
    try {
      const response = await api.delete(`/navers/${id}`)

      if (response.status === 200) {
        setModalConfirmation(false)
        setModalVisible(true)
        // loadNavers()
      } else {
        console.log('erro 48')
        setModalConfirmation(false)
        setModalVisible(false)
      }

    } catch (error) {
      setModalConfirmation(false)
      setModalVisible(false)
      console.log('error delete ', error)
    }
  }

  function onDismiss() {
    console.log('ON DISMISS 61')
    loadNavers()
    setModalVisible(false)
    setModalConfirmation(false)
  }

  function handleEdit() { }

  function _renderItem(naver) {
    console.log('NAVER 70 ', naver)
    return (
      <View>
        <ModalComponent
          modalVisible={modalConfirmation}
          title="Excluir naver"
          message="Tem certeza que deseja excluir este naver?"
          onDismiss={onDismiss}
          onDelete={() => handleDelete(naver.id)}
          showOptions
        />
        <ModalComponent
          modalVisible={modalVisible}
          title="Naver excluido"
          message="Naver excluído com sucesso!"
          onDismiss={onDismiss}
        />
        <Container key={naver.id} onPress={() => {
          navigation.navigate('NaverDetail', { naverId: naver.id })
        }}>
          <Image
            source={{ uri: naver?.url }}
            style={{ height: 156, width: 156 }}
          />

          <NaverName>{naver.name}</NaverName>
          <NaverJobRole>{naver.job_role}</NaverJobRole>
        </Container>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <TouchableOpacity onPress={() => setModalConfirmation(true)}>
            <Icon name="trash" size={18} style={{ marginRight: 12 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEdit}>
            <Icon name="edit-2" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <FlatList
      numColumns={2}
      keyExtractor={item => item.id}
      data={navers}
      columnWrapperStyle={{
        justifyContent: 'space-between'
      }}
      style={{ width: '100%' }}
      renderItem={({ item }) => _renderItem(item)}
    />
  );
}

export default CardNaver;
