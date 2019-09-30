import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  background-color: #379e94;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border-radius: 30px;
  elevation: 15;
`;

export const HelpButton = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'NotoSans-Regular';
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 16px;
`;
