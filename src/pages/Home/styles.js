import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 25px ${getBottomSpace()}px;
  background: ${props => props.theme.primary};
`;

export const Title = styled.Text`
  color: ${props => props.theme.secundary};
  font-size: 22px;
  font-family: 'Montserrat-SemiBold';
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 0 5px 0;
`;

export const ButtonAddNaver = styled.TouchableOpacity`
  background: ${props => props.theme.secundary};
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-width: 156px;
`;

export const TextButtonAddNaver = styled.Text`
  color: ${props => props.theme.primary};
  font-family: 'Montserrat-SemiBold';
`;
