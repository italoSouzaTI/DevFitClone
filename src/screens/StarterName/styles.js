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
export const NameInput = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  padding-left: 15px;
`;

export const NextButton = styled.Button``;

export const BtnText = styled.Text`
  color: ${props => props.txtColor || '#000'};
  font-weight: bold;
`;
