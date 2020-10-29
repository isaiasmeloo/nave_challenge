import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  max-height: 40px;
  background: ${props => props.theme.secundary};
  margin: 5px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props => props.textColor ? props.textColor : props.theme.primary};
`;
