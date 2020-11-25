import React,{useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Buttons} from '../components';

const {width, height} = Dimensions.get('screen');

const GetStarted = ({navigation}) => {


  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(0)
      const startHour = JSON.stringify(5)
      const endHour = JSON.stringify(23)
      await AsyncStorage.setItem('@isAsyncStorageSet', jsonValue)
      await AsyncStorage.setItem('@startHour', startHour)
      await AsyncStorage.setItem('@endHour', endHour)
    } catch (e) {
      console.warn("Hata",e)
    }
  }




  function selectPage() {
    navigation.navigate('EnterPoem');
  }
  useEffect(()=>{
    getData()
    
  })



  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@isAsyncStorageSet')
      if(value === null) {
      storeData()
      }
      else{
        // console.warn(value)
        // if(value==="1"){
        //  navigation.navigate('App')};
      }
    } catch(e) {
      console.log(e)
    }
  }

  
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <ImageBackground
        source={require('../assets/get_started.png')}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <Text style={styles.text}>Refresh Your Soul</Text>

        <View style={styles.getView}>
          <Buttons onSelectPage={() => selectPage()} title="Get Started" />
        </View>
      </ImageBackground>
    </View>
  );
};

export {GetStarted};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    left: 8,
    top: 270,
    fontSize: 40,
    fontFamily: 'Satisfy-Regular',
  },
  getView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height * 0.05,
    // borderWidth: 2,
    // borderColor: 'blue',
  },
});

// import React from 'react';
// import {
//   ImageBackground,
//   Text,
//   TouchableOpacity,
//   View,
//   SafeAreaView,
//   Dimensions,
//   StyleSheet,
// } from 'react-native';

// const GetStarted = ({navigation}) => {
//     function selectPage() {
//         navigation.navigate('EnterPoem');
//       }
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <View>
//           <ImageBackground
//             source={require('../assets/read_wavexxxhdpi.png')}
//             source={require('../assets/getStarted.png')}
//             style={{
//               width: Dimensions.get('window').width,
//               height: Dimensions.get('window').height / 2,
//             }}></ImageBackground>
//         </View>
//         <View style={styles.container}>
//           <View style={styles.mottoView}>
//             <Text style={styles.mottoText}>Motto</Text>
//           </View>
//           <View
//             style={styles.getView}>
//             <TouchableOpacity
//                 onPress={()=>selectPage()}
//               style={styles.button}>
//               <Text style={styles.buttonText}>Get Started</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export {GetStarted};

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'space-around',
//     // borderWidth: 2,
//     // borderColor: 'red',
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor:"white"
//   },
//   mottoView:{
//     flex: 1,
//     // borderWidth: 2,
//     // borderColor: 'purple',
//     justifyContent:"center"
//   },
//   mottoText:{
//     fontWeight:"bold",
//     fontSize:18,
//     letterSpacing:1,
//   },
//   getView:{
//     flex: 1,
//     // borderWidth: 2,
//     // borderColor: 'blue',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   button:{
//     backgroundColor: '#66bb6a',
//     width: Dimensions.get('window').width / 2,
//     height: Dimensions.get('window').height / 15,
//     borderRadius: 20,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   buttonText:{
//     fontWeight:"bold",
//     fontSize:18,
//     letterSpacing:1,
//     color:"white"
//   }
// });
