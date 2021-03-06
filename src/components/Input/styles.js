import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
`;

export const Label = styled.Text`
  font-family: 'Montserrat-SemiBold';
  line-height: 18px;
  color: ${props => props.theme.secundary};
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-color: #424242;
  font-size: 16px;

  color: ${props => props.theme.secundary};

  padding: 8px;
  margin-top: 5px;
`;
