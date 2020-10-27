import React from 'react';
import { Image } from 'react-native';

import { Container, NaverName, NaverJobRole } from './styles';

import image from '../../assets/IMG_9945.png';

const CardNaver = ({ naver }) => {
  return (
    <Container key={naver.id}>
      <Image source={image} />

      <NaverName>{naver.name}</NaverName>
      <NaverJobRole>{naver.job_role}</NaverJobRole>
    </Container>
  );
}

export default CardNaver;
