import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.View`
  margin: 20px;
  background-color: ${props => props.theme.primary};
  padding: 20px;
  box-shadow: 0px 2px 4px  #212121;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.secundary};
  font-size: 22px;
  font-family: 'Montserrat-SemiBold';
`;

export const Message = styled.Text`
  color: ${props => props.theme.secundary};
  font-family: 'Montserrat-Regular';
  margin-top: 20px;
`;
