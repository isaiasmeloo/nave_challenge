import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 35px;
`;

export const Title = styled.Text`
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
  background: #212121;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-width: 156px;
`;

export const TextButtonAddNaver = styled.Text`
  color: #FFFFFF;
  font-family: 'Montserrat-SemiBold';
`;
