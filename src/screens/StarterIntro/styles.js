import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 30px;
  /* margin-right: 30px; */
`;
export const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 20px;
`;
export const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
export const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
export const BeginConfigArea = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;
export const BtnText = styled.Text`
  color: ${props => props.txtColor || '#000'};
  font-weight: bold;
`;
