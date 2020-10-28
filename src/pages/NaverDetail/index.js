import React, { useEffect, useState } from 'react';
import { Image, View, Alert } from 'react-native';
import { differenceInYears, parseISO } from 'date-fns'
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import ButtonComponent from '../../components/Button'

import {
  Container,
  Name,
  Description,
  Label,
  ContainerButton,
} from './styles';

import image from '../../assets/IMG_9945.png';

export default function NaverDetail({ route }) {
  const [naver, setNaver] = useState(null)
  const navigation = useNavigation()

  useEffect(() => {
    async function getNaver() {
      try {
        const response = await api.get(`/navers/${route.params.naverId}`)

        const age = differenceInYears(new Date(), parseISO(response.data.birthdate))
        const company_time = differenceInYears(new Date(), parseISO(response.data.admission_date))

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

  async function handleDeleteNaver() {
    try {
      const response = await api.delete(`/navers/${route.params.naverId}`)
      console.log(response.data)
      Alert.alert('Sucesso!', 'Naver excluído.')

      navigation.goBack()
    } catch (error) {
      console.log('erro ao excluir ', error)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: naver?.url }} style={{ width: '100%', height: '40%' }} />
      <Container>
        <View>
          <Name>{naver?.name}</Name>
          <Description>{naver?.job_role}</Description>
        </View>

        <View>
          <Label>Idade</Label>
          <Description> {naver?.age} </Description>
        </View>
        <View>
          <Label>Tempo de empresa</Label>
          <Description> {naver?.company_time} </Description>
        </View>
        <View>
          <Label>Projetos que participou</Label>
          <Description> {naver?.project} </Description>
        </View>

        <ContainerButton>
          <ButtonComponent
            onPress={handleDeleteNaver}
            style={{ backgroundColor: 'transparent', borderWidth: 1 }}
            text="Excluir" textColor="#000000"
          />
          <ButtonComponent text="Editar" />
        </ContainerButton>

      </Container>
    </View>
  );
}
