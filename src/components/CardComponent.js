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

const CardComponent = (props) => {
  return (
    <TouchableWithoutFeedback onPress={()=> props.onSelect()}>

    <View style={styles.custom}>
      <ImageBackground
        source={require('../assets/pexels-pixabay-33109.jpg')}
        style={styles.image}
        imageStyle={{borderRadius: 15}}
        
        
        >
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            backgroundColor: "#000000a0",
            borderRadius:15
          }}>
          <View style={{flex: 0.8, justifyContent: 'center'}}>
            <Text style={styles.text1}>Zindandan Mehmed'e Mektup</Text>
          </View>
          <View style={{flex: 2, justifyContent: 'center', alignSelf:'auto',}}>
            <Text style={styles.text2} numberOfLines={5}>
              Zindan iki hece, Mehmed'im lâfta!{'\n'}Baba katiliyle baban bir
              safta!{'\n'}
              Bir de, geri adam, boynunda yafta...{'\n'}Halimi düşünüp yanma
              Mehmed'im!{'\n'}
              Kavuşmak mı? .. Belki... Daha ölmedim!
            </Text>
          </View>
          <View style={{alignSelf: 'flex-start', flex: 0.8, justifyContent:'center'}}>
            <Text style={styles.text3}>Necip Fazıl Kısakürek</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
</TouchableWithoutFeedback>
  );
};
export {CardComponent};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.25,
    resizeMode: 'cover',
    
    
  
  },
  text1: {
    fontWeight:'bold',
    fontSize: 50,
    fontWeight: 'normal',
    fontSize: 20,
    color: 'white',
  
  },
  text2: {
    fontSize: 50,
    fontWeight: '900',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.2,
  
    
  },

  text3: {
    fontSize: 50,
    fontWeight: 'normal',
    fontSize: 15,
    color: 'white',
    fontFamily: 'Satisfy-Regular',
    paddingLeft: 10,

  },
  custom: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.25,
    alignSelf: 'center',
    marginVertical: 5,
    
    

    
      },
});
