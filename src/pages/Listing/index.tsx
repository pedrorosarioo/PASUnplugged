import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  NavigationInjectedProps,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import {ListItem} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const image = require('../../../assets/images/heart.png');
import pixelData from '../../stages/pixel';
import binaryData from '../../stages/binary';

class Listing extends React.Component<NavigationInjectedProps, {}> {
  state = {
    data: [],
  };

  public onPress = (element: any) => {
    if (this.game === 'pixel') {
      const resetAction = StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({routeName: 'Home'}),
          NavigationActions.navigate({
            routeName: 'Pixel',
            params: {stage: element.item},
          }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      const resetAction = StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({routeName: 'Home'}),
          NavigationActions.navigate({
            routeName: 'Binary',
            params: {stage: element.item},
          }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }
  };

  public renderItem = (element: any) => {
    return (
      <ListItem
        onPress={() => this.onPress(element)}
        title={element.item.name}
        key={element.item.name}
        containerStyle={{backgroundColor: '#3fbaaf'}}
        titleStyle={{color: 'white', fontSize: wp(5)}}
        rightIcon={
          <Icon
            name="trophy"
            size={25}
            color={element.item.hasCompleted ? '#fcba03' : '#000'}
          />
        }
      />
    );
  };

  public game = this.props.navigation.getParam('game', 'pixel');
  public componentDidMount = () => {
    this.getStoredValue();
  };
  public getStoredValue = async () => {
    // await AsyncStorage.removeItem('pixel');
    if (this.game === 'pixel') {
      const pixelValues = JSON.parse(await AsyncStorage.getItem('pixel'));
      if (pixelValues) {
        pixelData.forEach(stage => {
          if (pixelValues.indexOf(stage.name) > -1) {
            stage.hasCompleted = true;
          }
        });
      }
      this.setState({data: pixelData});
    } else {
      const binaryValues = JSON.parse(await AsyncStorage.getItem('binaries'));
      if (binaryValues) {
        binaryData.forEach(stage => {
          if (binaryValues.indexOf(stage.name) > -1) {
            stage.hasCompleted = true;
          }
        });
      }
      this.setState({data: binaryData });
    }
  };

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
          data={this.state.data}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: '#727C8F'}} />
          )}
        />
      </View>
    );
  }
}

export default Listing;
