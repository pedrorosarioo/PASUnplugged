import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Circle = styled.TouchableOpacity<{
  active?: boolean;
}>`
  background-color: ${props => (props.active ? '#494e57' : '#FFF')};
  width: ${wp(8)};
  height: ${wp(8)};
  border-radius: ${wp(10)}px;
  margin-right: ${wp(1)}px;
`;

export {Circle};
