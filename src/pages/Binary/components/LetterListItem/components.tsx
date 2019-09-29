import styled from 'styled-components/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Container = styled.View`
    width: 100%;
    height: ${hp(4.9)}px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: ${hp(1)}px 0px;
    position: relative;
`

export const Bite = styled.View<{marked: boolean}>`
    width: ${hp(4.2)}px;
    height: ${hp(4.2)}px;
    border-radius: ${hp(2.1)}px;
    background-color: ${props => props.marked ? '#000' :  '#fff'}
`

export const DataImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.View`
    width: ${hp(4.2)}px;
    height: ${hp(4.2)}px;
`;
