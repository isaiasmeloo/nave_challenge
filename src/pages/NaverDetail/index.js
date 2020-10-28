import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import { differenceInYears, parseISO } from 'date-fns'

import api from '../../services/api';

import {
  Container,
  Name,
  Description,
  Label,
  ContainerButton,
  Button,
} from './styles';

import image from '../../assets/IMG_9945.png';

export default function NaverDetail({ route }) {
  const [naver, setNaver] = useState(null)

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

  return (
    <View style={{ flex: 1 }}>
      <Image source={image} style={{ width: '100%', height: '40%' }} />
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
          <Button style={{ backgroundColor: 'transparent', borderWidth: 1 }}>
            <Text>Excluir</Text>
          </Button>
          <Button>
            <Text style={{ color: '#FFFFFF' }}>Editar</Text>
          </Button>
        </ContainerButton>

      </Container>
    </View>
  );
}
