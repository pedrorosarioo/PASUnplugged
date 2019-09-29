import React from 'react';
import {View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Circle} from './components';

class Pixel extends React.Component {
  state = {
    pixels: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    tips: [
      [2, 3, 3],
      [5, 1, 2],
      [2, 4, 2],
      [1, 1, 3, 1, 2],
      [1, 1, 3, 1, 2],
      [2, 4, 2],
    ],
  };

  public answer = '';

  public componentDidMount = () => {
    const answer = [];
    this.state.tips.forEach((row, rowIndex) => {
      const rowAnswer = [];
      row.forEach((value, valueIndex) => {
        if ((valueIndex + 1) % 2 == 1) {
          console.log('valueIndex é impar', value);
          for (let i = 0; i < value; i++) {
            rowAnswer.push(0);
          }
        } else {
          console.log('valueIndex é par', value);
          for (let i = 0; i < value; i++) {
            rowAnswer.push(1);
          }
        }
      });
      answer.push(rowAnswer);
    });
    console.log(answer);
    this.answer = JSON.stringify(answer);
  };

  public switchPixelState = (previousState, rowIndex, pixelIndex) => {
    const newPixelValue = previousState === 0 ? 1 : 0;
    const pixels = [...this.state.pixels];
    pixels[rowIndex][pixelIndex] = newPixelValue;
    this.setState({pixels});
  };

  public validate = () => {
    const userAnswerJSON = JSON.stringify(this.state.pixels);
    console.log(userAnswerJSON);
    console.log(typeof this.answer);
    if (userAnswerJSON == this.answer) {
      Alert.alert('Parabéns! Você acertou!!!');
    } else {
      Alert.alert('Você errou. Tente novamente!');
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
          <View style={{width: wp(30)}}>
            <Icon.Button
              name="play"
              backgroundColor="#04D1A7"
              onPress={this.validate}>
              <Text
                style={{fontSize: wp(5), textAlign: 'center', color: 'white'}}>
                Validar
              </Text>
            </Icon.Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Pixel;
