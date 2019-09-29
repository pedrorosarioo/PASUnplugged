import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Bite, DataImage, ImageContainer } from './components';

interface IProps {
    data: string[];
    index: number;
    onGuest?: () => void;
}

const images = {
    1: require('../../../../../assets/images/data1.png'),
    2: require('../../../../../assets/images/data2.png'),
    3: require('../../../../../assets/images/data3.png'),
    4: require('../../../../../assets/images/data4.png'),
    5: require('../../../../../assets/images/data5.png')
}

const LetterListItem = (props: IProps) => {
    const [ visible, setVisible ] = useState(false)
    return (
        <Container>
            { props.data.map((item, index) => {
                const path = images[5-index];
                if (!visible) {
                   return <Bite marked={item==="1"}/>
                }
                return (
                    <ImageContainer>
                        <DataImage source={path} />
                    </ImageContainer>
                );
            }) }
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                <ImageContainer>
                    <DataImage source={require('../../../../../assets/images/revealicon.png')} />
                </ImageContainer>
            </TouchableOpacity>
        </Container>
    );
}

export default LetterListItem;