import React from 'react';
import {View} from 'react-native';
import {Header} from 'react-native-elements';
import {Container, Button, ButtonText} from './styled';

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
          <Button>
            <ButtonText>Pixel</ButtonText>
          </Button>
          <Button>
            <ButtonText style={{fontSize: 24}}>0 1</ButtonText>
            <ButtonText>Números binários</ButtonText>
          </Button>
        </Container>
      </View>
    );
  }
}

export default Home;
