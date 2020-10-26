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
  color: #212121;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-color: #424242;
  font-size: 16px;

  padding: 8px;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  background: #212121;
  margin-top: 40px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  color: #FFFFFF;
`;
