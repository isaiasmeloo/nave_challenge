import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather'

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  max-height: 40px;
  background: ${props => props.white ? props.theme.primary : props.theme.secundary};
  flex-direction: row;
  border-width: 1px;
  border-color: ${props => props.white ? props.theme.secundary : props.theme.primary};

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props => props.white ? props.theme.secundary : props.theme.primary};
`;

export const Icon = styled(IconFeather)`
  margin-right: ${props => props.name ? 6 : 0}px;
  color: ${props => props.white ? props.theme.secundary : props.theme.primary};
`;
