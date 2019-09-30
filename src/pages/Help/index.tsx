import React, {useState} from 'react';
import {ButtonGroup, Header} from 'react-native-elements';
import {Container, InnerContainer} from './styled';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationInjectedProps} from 'react-navigation';

export default function Help(props: NavigationInjectedProps) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Header
        backgroundColor={'#379e94'}
        centerComponent={{
          text: 'Tutoriais',
          style: {
            color: '#fff',
            fontFamily: 'NotoSans-Regular',
            fontSize: 24,
          },
        }}
        leftComponent={
          <Icon
            name="chevron-left"
            onPress={() => props.navigation.goBack()}
            color="white"
            size={24}
          />
        }
      />
      <Container>
        <ButtonGroup
          selectedIndex={selected}
          onPress={setSelected}
          buttons={['Pixel', 'Números binários']}
          containerStyle={{
            height: 50,
            backgroundColor: '#379e94',
          }}
          textStyle={{
            color: 'white',
          }}
          selectedButtonStyle={{
            backgroundColor: 'gray',
          }}
        />
        <InnerContainer>
          {selected === 0 ? (
            <>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
                Píxel
              </Text>
              <Text style={{fontSize: 16}}>
                Neste jogo, o jogador verá uma grade de bolinhas brancas, sendo
                distribuídas em 8 por linha, ao lado de cada uma das linhas,
                verá uma sequência de números, separados por vírgula, que
                indicam quantas bolas não deverão ser tocadas e quantas deverão,
                pelo jogador, em ordem.
              </Text>
              <Text style={{marginTop: 10, marginBottom: 10, fontSize: 16}}>
                Ex: 1, 2, 1
              </Text>
              <Text style={{fontSize: 16}}>
                Nesse caso, o jogador não deverá tocar na primeira bola, tocar
                nas duas seguintes, e novamente, deixar de tocar a próxima. No
                fim, o jogador verá um desenho na tela, formado pelas bolas
                tocadas por ele, simulando o comportamento de pixels na tela.
              </Text>
            </>
          ) : (
            <>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
                Números Binários
              </Text>
              <Text style={{fontSize: 16}}>
                Neste jogo, o jogador verá uma grade com bolas marcadas e
                desmarcadas, e ao lado de cada linha, um botão que permitirá-lo
                ver o valor de cada uma das bolas, sendo que esse valor, só é
                contabilizado nas bolas marcadas. Ao somar o valor das bolas em
                cada linha, o jogador poderá consultar uma tabela abaixo e ver
                qual valor corresponde a qual letra. Por fim, encontrando todas
                as letras, ele terá a palavra formada e vencerá o jogo.
              </Text>
            </>
          )}
        </InnerContainer>
      </Container>
    </>
  );
}
