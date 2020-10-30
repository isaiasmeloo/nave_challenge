import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const NaverName = styled.Text`
  color: ${props => props.theme.secundary};
  font-family: 'Montserrat-SemiBold';
  margin: 5px 0;
`;

export const NaverJobRole = styled.Text`
  color: ${props => props.theme.secundary};
  font-family: 'Montserrat-Regular';
`;

export const FooterButtons = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
