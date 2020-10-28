import React from 'react';
import { Image } from 'react-native';

import { Container, NaverName, NaverJobRole } from './styles';

import image from '../../assets/IMG_9945.png';
import { useNavigation } from '@react-navigation/native';

const CardNaver = ({ naver }) => {
  const navigation = useNavigation()
  return (
    <Container key={naver.id} onPress={() => {
      navigation.navigate('NaverDetail', { naverId: naver.id })
    }}>
      <Image source={image} />

      <NaverName>{naver.name}</NaverName>
      <NaverJobRole>{naver.job_role}</NaverJobRole>
    </Container>
  );
}

export default CardNaver;
