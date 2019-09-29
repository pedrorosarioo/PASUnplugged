import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationInjectedProps} from 'react-navigation';

import {ListItem} from 'react-native-elements';

const image = require('../../../assets/images/heart.png');
import pixelData from '../../stages/pixel';

const data = [
  {
    name: 'Pixel 1',
    hasCompleted: false,
  },
  {
    name: 'Pixel 2',
    hasCompleted: false,
  },
  {
    name: 'Pixel 3',
    hasCompleted: false,
  },
  {
    name: 'Pixel 4',
    hasCompleted: false,
  },
  {
    name: 'Pixel 5',
    hasCompleted: false,
  },
  {
    name: 'Pixel 6',
    hasCompleted: false,
  },
  {
    name: 'Pixel 7',
    hasCompleted: false,
  },
  {
    name: 'Pixel 8',
    hasCompleted: false,
  },
  {
    name: 'Pixel 9',
    hasCompleted: false,
  },
];

class Listing extends React.Component<NavigationInjectedProps, {}> {
  state = {};

  public onPress = (element: any) => {
    console.log(element);
    this.game === 'pixel'
      ? this.props.navigation.navigate('Pixel', {stage: element.item})
      : null;
  };

  public renderItem = (element: any) => {
    console.log(element);
    return (
      <ListItem
        onPress={() => this.onPress(element)}
        title={element.item.name}
        key={element.item.name}
        containerStyle={{backgroundColor: '#3fbaaf'}}
        titleStyle={{color: 'white', fontSize: wp(5)}}
        rightIcon={<Icon name="trophy" size={25} />}
      />
    );
  };

  public game = this.props.navigation.getParam('game', 'pixel');

  public keyExtractor = (_, index) => `${index}`;

  render() {
    return (
      <View style={{backgroundColor: '#3fbaaf', flex: 1}}>
        <View
          style={{
            backgroundColor: '#379e94',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: hp(1.5),
            paddingBottom: hp(1.5),
          }}>
          <Image
            source={image}
            style={{width: 70, height: 70, marginLeft: wp(20)}}
          />
          <Text style={{fontSize: wp(5), color: '#FFF', marginLeft: hp(3)}}>
            DESAFIO
            {` ${this.game.toUpperCase()}`}
          </Text>
        </View>
        <View style={{height: 2, backgroundColor: '#727C8F'}} />
        <FlatList
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          data={this.game === 'pixel' ? pixelData : []}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: '#727C8F'}} />
          )}
        />
      </View>
    );
  }
}

export default Listing;
