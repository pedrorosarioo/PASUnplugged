import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Feather';

import {Container, Button, ButtonText, HelpButton} from './styled';
import {NavigationInjectedProps} from 'react-navigation';

class Home extends React.Component<NavigationInjectedProps<any>> {
  render() {
    return (
      <>
        <Header
          backgroundColor={'#379e94'}
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
          <Text
            style={{
              marginBottom: 30,
              fontSize: 20,
              textAlign: 'center',
              fontFamily: 'NotoSans-Regular',
            }}>
            Bem vindo ao unplugged! Escolha um jogo e divirta-se!
          </Text>
          <Button
            onPress={() =>
              this.props.navigation.navigate('Listing', {game: 'pixel'})
            }>
            <Icon name="star" size={40} color="white" />
            <ButtonText>Pixel</ButtonText>
          </Button>
          <Button
            onPress={() =>
              this.props.navigation.navigate('Listing', {game: 'binário'})
            }>
            <ButtonText style={{fontSize: 32}}>0 1</ButtonText>
            <ButtonText>Números binários</ButtonText>
          </Button>
          <HelpButton>
            <ButtonText
              onPress={() => this.props.navigation.navigate('Help')}
              style={{marginTop: 0, color: '#4267b2'}}>
              Ajuda
            </ButtonText>
          </HelpButton>
        </Container>
      </>
    );
  }
}

export default Home;
