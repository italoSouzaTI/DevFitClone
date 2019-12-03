import styled from 'styled-components/native';

export default styled.TouchableHighlight`
  width: ${props => props.width || 'auto'};
  height: ${props => props.heigth || '0'};
  background-color: ${props => props.btnColor || '#eee'};
  padding: 10px 20px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.marginBottom || '0'};
`;
