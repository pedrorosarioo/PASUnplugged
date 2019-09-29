import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Container} from './styled';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Unplugged',
            style: {
              color: '#fff',
              fontFamily: 'NotoSans-Regular',
              fontSize: 24,
            },
          }}
        />
        <Container>
          <Text>Vamo time, testando</Text>
        </Container>
      </View>
    );
  }
}

export default Home;
