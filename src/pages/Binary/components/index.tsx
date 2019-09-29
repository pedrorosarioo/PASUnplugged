import styled from 'styled-components/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


export const PageHeader = styled.View`
    width: 100%;
    height: ${hp(10)}px;
    background-color: #fff;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({ placeholder: 'Qual é a palavra' })`
    width: ${wp(75)}px;
    height: ${hp(10)}px;
`

export const PlayIcon = styled(Icon).attrs({ 
    name:"play-circle",
    size:hp(8),
    color: '#379e94'
})``;

export const Content = styled.View`
    width: 100%;
    height: ${hp(90)}px;
    background-color: rgb(68,132,148);
`;

export const DicView = styled.View`
    width: 100%;
    height: ${hp(20)}px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: ${hp(5)};
`

export const Dicionary = styled.Image.attrs({
    source: require('../../../../assets/images/dicionario.png')
})` 
    width: ${wp(98)}px;
    height: ${hp(20)}px;
`;