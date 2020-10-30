import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
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
`;
