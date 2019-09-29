import React from 'react';
import {View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationInjectedProps} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Circle} from './components';

class Pixel extends React.Component<NavigationInjectedProps, {}> {
  state = {
    pixels: [],
    tips: this.props.navigation.getParam('stage', []).tips,
  };

  public name = this.props.navigation.getParam('stage', '').name;
  public answer = '';

  public componentDidMount = () => {
    const answer = [];
    const tipsLength = this.state.tips.length;
    const pixels = [];
    for (let i = 0; i < tipsLength; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push(0);
      }
      pixels.push(row);
    }
    this.state.tips.forEach((row, rowIndex) => {
      const rowAnswer = [];
      row.forEach((value, valueIndex) => {
        if ((valueIndex + 1) % 2 == 1) {
          for (let i = 0; i < value; i++) {
            rowAnswer.push(0);
          }
        } else {
          for (let i = 0; i < value; i++) {
            rowAnswer.push(1);
          }
        }
      });
      answer.push(rowAnswer);
    });

    this.answer = JSON.stringify(answer);
    this.setState({pixels});
  };

  public switchPixelState = (previousState, rowIndex, pixelIndex) => {
    const newPixelValue = previousState === 0 ? 1 : 0;
    const pixels = [...this.state.pixels];
    pixels[rowIndex][pixelIndex] = newPixelValue;
    this.setState({pixels});
  };

  public validate = () => {
    const userAnswerJSON = JSON.stringify(this.state.pixels);
    if (userAnswerJSON == this.answer) {
      this.saveProgress();
      Alert.alert('Parabéns! Você acertou 🎉🎉🎉🎉', null, null, {
        onDismiss: () => this.props.navigation.goBack(),
      });
    } else {
      Alert.alert('Você errou 😢 Tente novamente!');
    }
  };

  public saveProgress = async () => {
    const pixelValues = JSON.parse(await AsyncStorage.getItem('pixel'));
    console.log({pixelValues});
    if (pixelValues) {
      if (pixelValues.indexOf(this.name) === -1) {
        await AsyncStorage.setItem(
          'pixel',
          JSON.stringify([...pixelValues, this.name]),
        );
      }
    } else {
      await AsyncStorage.setItem('pixel', JSON.stringify([this.name]));
    }
  };

  render() {
    return (
      <View style={{backgroundColor: '#4CB5AB', flex: 1, paddingTop: hp(2)}}>
        {this.state.pixels.map((row, rowIndex) => {
          const circles = row.map((pixel, pixelIndex) => (
            <Circle
              key={`${rowIndex}/${pixelIndex}`}
              active={pixel === 1}
              onPress={() => this.switchPixelState(pixel, rowIndex, pixelIndex)}
            />
          ));

          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: hp(1),
                marginLeft: wp(2.5),
              }}
              key={`${rowIndex}/-1`}>
              <View key={`${rowIndex}`} style={{flexDirection: 'row'}}>
                {circles}
              </View>
              <View style={{marginLeft: wp(2)}}>
                <Text style={{fontSize: wp(4.5), color: '#F5F5F5'}}>
                  {this.state.tips[rowIndex].join(', ')}
                </Text>
              </View>
            </View>
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: hp(2.5),
          }}>
          <Icon.Button
            name="play"
            backgroundColor="#04D1A7"
            style={{paddingLeft: 25}}
            size={hp(5)}
            onPress={this.validate}></Icon.Button>
        </View>
      </View>
    );
  }
}

export default Pixel;
