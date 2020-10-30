import styled from 'styled-components/native';

export const Label = styled.Text`
  font-family: 'Montserrat-SemiBold';
  line-height: 18px;
  color: ${props => props.theme.secundary};
  margin-top: 30px;
`;

export const DatePickerContainer = styled.TouchableOpacity`
  min-height: 40px;
  border-width: 1px;
  border-color: #424242;
  padding: 8px;
  justify-content: center;
  margin-top: 5px;
`;

export const DatePickerValue = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props => props.theme.secundary};
`;
