import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${props => props.theme.primary};
`;

export const Content = styled.View`
  flex: 1;
  /* background: ${props => props.theme.primary}; */
  /* padding: 20px;  */
`;

export const Title = styled.Text`
  color: ${props => props.theme.secundary};
  font-family: 'Montserrat-SemiBold';
  text-align: center;
  padding: 10px;
  font-size: 22px;
  line-height: 32px;
`;
