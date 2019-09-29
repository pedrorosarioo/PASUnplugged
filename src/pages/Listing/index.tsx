import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ListItem} from 'react-native-elements';

const image = require('../../../assets/images/heart.png');

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

class Listing extends React.Component {
  state = {};

  public renderItem = (element: any) => {
    console.log(element);
    return (
      <ListItem
        title={element.item.name}
        key={element.item.name}
        containerStyle={{backgroundColor: '#3fbaaf'}}
        titleStyle={{color: 'white', fontSize: wp(5)}}
      />
    );
  };

  public keyExtractor = (item, index) => `${index}`;

  render() {
    return (
      <View>
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
            DESAFIO PIXEL
          </Text>
        </View>
        <View style={{height: 2, backgroundColor: '#727C8F'}} />
        <FlatList
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          data={data}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: '#727C8F'}} />
          )}
        />
      </View>
    );
  }
}

export default Listing;
