import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Buttons} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width,height}=Dimensions.get("window")

const Begin = ({navigation}) => {
  function selectPage() {
    storeData()
    navigation.navigate('App');

 
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(1)
      await AsyncStorage.setItem('@isAsyncStorageSet', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <ImageBackground
            source={require('../assets/go.jpeg')}
            style={{
              width: Dimensions.get('window').width,
              aspectRatio:1.66
            }}></ImageBackground>
        </View>
        <View style={styles.container}>
          <View style={styles.mottoView}>
            <Text style={styles.mottoText}>Ready To Go</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('window').width,
              marginVertical:height*0.02
            }}>
            <View style={{marginLeft: 20}}>
              <Icon name="check" size={30} color="#e53935" />
            </View>

            <View style={{justifyContent:"center"}}>
              <Text style={{flexWrap: 'wrap', paddingRight: 45,paddingLeft:10,fontSize:18}}>
                You will periodically receive notifications based on your preferences.
                
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('window').width,
              marginVertical:height*0.02
            }}>
            <View style={{marginLeft: 20}}>
              <Icon name="check" size={30} color="#e53935" />
            </View>

            <View style={{justifyContent:"center",width:width*0.9}}>
              <Text style={{flexWrap: 'wrap', paddingRight: 60,paddingLeft:10,fontSize:18}}>
                You can change these preferences or disable daily poems at any time.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('window').width,
              marginVertical:height*0.02
            }}>
            <View style={{marginLeft: 20}}>
              <Icon name="check" size={30} color="#e53935" />
            </View>

            <View style={{justifyContent:"center"}}>
              <Text style={{flexWrap: 'wrap', paddingRight: 60,paddingLeft:10,fontSize:18}}>
                Welcome to the world of poems
              </Text>
            </View>
          </View>

          <View style={styles.getView}>
          <Buttons onSelectPage={() => selectPage()} title="Begin" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Begin};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    // borderWidth: 2,
    // borderColor: 'red',
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  mottoView: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'purple',
    justifyContent: 'center',
    alignItems:"center"
  },
  mottoText: {
    fontWeight: 'bold',
    fontSize: 32,
    letterSpacing: 1,
  },
  getView: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue',
    alignSelf: 'center',
    justifyContent: "flex-end",
    paddingBottom: height * 0.05,
    
  },
  button: {
    backgroundColor: '#e53935',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    color: 'white',
  },
});

// import React from 'react';
// import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {beginItem, button} from '../styles';

// const Begin = (props) => {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
//       <View style={beginItem.container}>
//         <View style={beginItem.firstArea}>
//           <Text style={beginItem.firstText}>Ready To Go!</Text>
//         </View>
//         <View style={beginItem.secondArea}>
//           <View style={beginItem.IconText}>
//             <Icon name="bell-ring" size={60} color="#ff94c2" />
//             <Text style={beginItem.Text}>
//               You will periodically receive daily poems when you unlock your
//               phone,based on your prefences
//             </Text>
//           </View>
//           <View style={beginItem.IconText}>
//             <Icon name="cog-outline" size={60} color="#ff94c2" />
//             <Text style={beginItem.Text}>
//               You can change these preferences or completely disable poems at
//               any time
//             </Text>
//           </View>
//           <View style={beginItem.IconText}>
//             <Icon name="cursor-default-click" size={60} color="#ff94c2" />
//             <Text style={beginItem.Text}>
//               Nope,not just that!Use the app whenever you like.World of Poems is
//               just tap away
//             </Text>
//           </View>
//         </View>
//         <View style={beginItem.buttonView}>
//           <TouchableOpacity style={beginItem.buttonContainer} onPress = {() => props.navigation.navigate("App")}>
//             <Text style={beginItem.buttonText}>Begin</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export {Begin};
