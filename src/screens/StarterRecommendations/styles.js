import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  background: #fff;
  margin: 30px;
  /* margin-right: 30px; */
`;

export const HeaderText = styled.Text`
  color: ${props => props.txtColor || '#333'};
  /* font-weight: bold; */
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const HeaderTextSub = styled(HeaderText)`
  color: ${props => props.txtClr || '#333'};
  font-weight: bold;
  font-size: 15px;
  margin-top: 0px;
`;

export const NextButton = styled.Button``;

export const WorkoutList = styled.FlatList`
  width: 100%;
`;
