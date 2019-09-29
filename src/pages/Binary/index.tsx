import React from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { PageHeader, Content, DicView, Input } from  './components';
import LetterListItem from './components/LetterListItem';
import { Text } from 'react-native-elements';
import { Dicionary, PlayIcon } from './components';
import AsyncStorage from '@react-native-community/async-storage';

interface IProps extends NavigationInjectedProps {}

interface IState {
    text: string;
    answer: string;
}

class Binary extends React.Component<IProps, IState> {

    public state={
        text: '',
        answer: this.props.navigation.getParam('stage', {word: 'normal'}).word.toLowerCase() as string,
    };

    private dicionary = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }

    private convertToBinArray = (char: string) => {
        const number = this.dicionary[char];
        const initializedArray = ['0','0','0','0','0'];
        if (!number) {
            return null;
        }
        const numberToArray = number.toString(2).split('');
        return [... initializedArray.slice(0, initializedArray.length - numberToArray.length), ... numberToArray]
    }

    private checkText = async () => {
        if (this.state.text.toLowerCase() === this.state.answer) {
            const stageName = this.props.navigation.getParam('stage', {name: 'normal'}).name;
            const binaryValues = await AsyncStorage.getItem('binaries');
            if (binaryValues) {
                if (binaryValues.indexOf(stageName) === -1) {
                    await AsyncStorage.setItem(
                    'binaries',
                    JSON.stringify([...binaryValues, stageName]),
                    );
                }
            } else {
                await AsyncStorage.setItem('binaries', JSON.stringify([stageName]));
            }
            return Alert.alert('Resposta correta!', 'Parabens você acertou! Siga para os proximos desafios', null, { 
                onDismiss: () => this.props.navigation.goBack()
            });
        }
        return Alert.alert('Ops, resposta errada...', 'Tente novamente :)')
    }

    public render() {
        return(
            <View>
                <PageHeader>
                    <Input onChangeText={(text) => this.setState({text})}/>
                    <TouchableOpacity onPress={() => this.checkText()}>
                     <PlayIcon />
                    </TouchableOpacity>
                </PageHeader>
                <Content>
                    {this.state.answer.split('').map((item, index) => {
                        return <LetterListItem key={index} data={this.convertToBinArray(item.toLowerCase())} index={index} />
                    })}
                    <DicView>
                     <Dicionary />
                    </DicView>
                </Content>
            </View>
        );
    }
}

export default withNavigation(Binary);