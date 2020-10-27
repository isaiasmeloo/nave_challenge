import React from 'react';
import { View, Text, Image } from 'react-native';

import image from '../../assets/IMG_9945.png';

const CardNaver = ({ naver }) => {
  return (
    <View key={naver.id} style={{ marginTop: 20 }}>
      <Image source={image} />

      <Text style={{ fontWeight: 'bold' }}>{naver.name}</Text>
      <Text>{naver.job_role}</Text>
    </View>
  );
}

export default CardNaver;
