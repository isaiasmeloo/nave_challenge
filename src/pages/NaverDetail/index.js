import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { differenceInMonths, differenceInYears, parseISO } from 'date-fns'
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import ButtonComponent from '../../components/Button'
import ModalComponent from '../../components/Modal';

import noImage from '../../assets/no_image.png';

import {
  Container,
  Name,
  Description,
  Label,
  ContainerButton,
} from './styles';

export default function NaverDetail({ route }) {
  const [naver, setNaver] = useState(null)
  const [modalConfirmation, setModalConfirmation] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    async function getNaver() {
      try {
        const response = await api.get(`/navers/${route.params.naverId}`)

        const age = differenceInYears(new Date(), parseISO(response.data.birthdate))
        const company_time = differenceInMonths(new Date(), parseISO(response.data.admission_date))

        const mapped = {
          ...response.data,
          age,
          company_time
        }

        if (response.status === 200) {
          setNaver(mapped)
        }

      } catch (error) {
        console.log('error ', error)
      }
    }
    getNaver()
  }, [])

  async function handleDelete() {
    try {
      const response = await api.delete(`/navers/${route.params?.naverId}`)

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
      console.log('error delete ', error)
    }
  }

  function handleEdit(id) {
    navigation.navigate('Naver', {
      id
    })
  }

  function onDismiss() {
    setModalVisible(false)
    setModalConfirmation(false)
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1 }}>
      <ModalComponent
        modalVisible={modalConfirmation || modalVisible}
        title={modalConfirmation ? "Excluir naver" : "Naver excluído"}
        message={modalConfirmation ? "Tem certeza que deseja excluir este naver?" : "Naver excluído com sucesso!"}
        onDismiss={onDismiss}
        onDelete={() => handleDelete(naver.id)}
        showOptions={modalConfirmation}
      />
      <Image defaultSource={noImage} source={{ uri: naver?.url }} style={{ width: '100%', height: '40%' }} />
      <Container>
        <View>
          <Name>{naver?.name}</Name>
          <Description>{naver?.job_role}</Description>
        </View>

        <View>
          <Label>Idade</Label>
          <Description>{naver?.age} anos</Description>
        </View>
        <View>
          <Label>Tempo de empresa</Label>
          <Description>{naver?.company_time} meses</Description>
        </View>
        <View>
          <Label>Projetos que participou</Label>
          <Description>{naver?.project}</Description>
        </View>

        <ContainerButton>
          <ButtonComponent
            white
            icon="trash"
            onPress={() => setModalConfirmation(true)}
            style={{ marginRight: 5 }}
            text="Excluir"
          />
          <ButtonComponent
            icon="edit-2"
            text="Editar"
            onPress={() => handleEdit(naver.id)}
          />
        </ContainerButton>

      </Container>
    </View>
  );
}
