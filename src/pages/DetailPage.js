import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

const DetailPage = (props) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/pexels-pixabay-33109.jpg')}  
        style={styles.image}
        
        >
        <View>
          <View>
            <Text>Zindandan Mehmed'e Mektup</Text>
          </View>
          <View>
            <Text>
              Zindan iki hece, Mehmed'im lâfta!{'\n'}Baba katiliyle baban bir
              safta!{'\n'}
              Bir de, geri adam, boynunda yafta...{'\n'}Halimi düşünüp yanma
              Mehmed'im!{'\n'}
              Kavuşmak mı? .. Belki... Daha ölmedim!
            </Text>
          </View>
          <View>
            <Text>Necip Fazıl Kısakürek</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export {DetailPage};

const styles = StyleSheet.create({
    image:{
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.25,
      resizeMode: 'cover',
    }
  })