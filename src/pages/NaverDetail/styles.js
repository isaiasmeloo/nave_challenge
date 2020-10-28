import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: space-evenly;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-family: 'Montserrat-SemiBold';
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-SemiBold';
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  background: #212121;
  margin: 5px;

  align-items: center;
  justify-content: center;
`;
