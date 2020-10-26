import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const CardNaver = ({ naver }) => {
  return (
    <View key={naver.id} style={{margin: 10}}>
      <View style={{ height: 156, width: 156, backgroundColor: '#434344' }}>

        <Text>{naver.url}</Text>
      </View>
      <Text style={{ fontWeight: 'bold' }}>{naver.name}</Text>
      <Text>{naver.job_role}</Text>
    </View>
  );
}

export default CardNaver;
