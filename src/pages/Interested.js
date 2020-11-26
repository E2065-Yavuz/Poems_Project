import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {InterestItem, Buttons} from '../components';

const {width, height} = Dimensions.get('screen');

const dataSource = [
  {
    id: 0,
    category: 'Love',
    isCheck: false,
  },
  {
    id: 1,
    category: 'Natural',
    isCheck: false,
  },
  {
    id: 2,
    category: 'Epic',
    isCheck: false,
  },
  {
    id: 3,
    category: 'Dramatic',
    isCheck: false,
  },
  {
    id: 4,
    category: 'Sonnet',
    isCheck: false,
  },
  {
    id: 5,
    category: 'Elegy',
    isCheck: false,
  },
  {
    id: 6,
    category: 'Love',
    isCheck: false,
  },
  {
    id: 7,
    category: 'Natural',
    isCheck: false,
  },
  {
    id: 8,
    category: 'Epic',
    isCheck: false,
  },
  {
    id: 9,
    category: 'Dramatic',
    isCheck: false,
  },
  {
    id: 10,
    category: 'Sonnet',
    isCheck: false,
  },
  {
    id: 11,
    category: 'Elegy',
    isCheck: false,
  },
  {
    id: 12,
    category: 'Sonnet',
    isCheck: false,
  },
  {
    id: 13,
    category: 'Elegy',
    isCheck: false,
  },
  {
    id: 14,
    category: 'Elegy',
    isCheck: false,
  },
  {
    id: 15,
    category: 'Elegy',
    isCheck: false,
  },
  {
    id: 16,
    category: 'Elegy',
    isCheck: false,
  },
  {
    id: 17,
    category: 'Elegy',
    isCheck: false,
  },
];

const Interested = (props) => {
  const [anlist, setapList] = useState(dataSource);
  function changeColor(nums) {
    const newListap = anlist;
    const numberssIndex = newListap.findIndex((item) => item.id == nums);
    newListap[numberssIndex].isCheck = !newListap[numberssIndex].isCheck;
    console.log(numberssIndex);
    setapList(newListap);
  }

  function selectPage() {
    props.navigation.navigate('Begin');
  }

  const renderItem = ({item}) => {
    return <InterestItem item={item} onChange={() => changeColor(item.id)} />;
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.mottoView}>
          <Text style={styles.mottoText}>
            Which Topic Are You Interested In
          </Text>
        </View>

        <View style={styles.flat}>
          <FlatList
            data={dataSource}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>

        <View style={styles.getView}>
          <Buttons onSelectPage={() => selectPage()} title="Continue" />
        </View>
      </View>
    </View>
  );
};

export {Interested};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    // borderWidth: 2,
    // borderColor: 'orange',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mottoAndFlat: {
    // borderWidth: 4,
    // borderColor: 'black',
    flex: 3,
    alignItems: 'center',
  },
  mottoView: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'purple',
    justifyContent: 'center',
  },
  mottoText: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
  },
  flat: {
    // borderWidth: 2,
    // borderColor: 'red',
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',

    width: Dimensions.get('window').width * 0.96,
  },
  getView: {
    flex: 1,
    position: 'absolute',
    bottom: height * 0.05,
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  button: {
    backgroundColor: '#e53935',
    width: Dimensions.get('window').width * 0.75,
    aspectRatio: 5.5,
    borderRadius: 30,
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

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   Dimensions,
//   View,
//   Text,
//   FlatList,
//   ImageBackground,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import {InterestItem} from '../components';

// const dataSource = [
//   {
//     id: 0,
//     category: 'Love',
//     isCheck: false,
//   },
//   {
//     id: 1,
//     category: 'Natural',
//     isCheck: false,
//   },
//   {
//     id: 2,
//     category: 'Epic',
//     isCheck: false,
//   },
//   {
//     id: 3,
//     category: 'Dramatic',
//     isCheck: false,
//   },
//   {
//     id: 4,
//     category: 'Sonnet',
//     isCheck: false,
//   },
//   {
//     id: 5,
//     category: 'Elegy',
//     isCheck: false,
//   },
// ];

// const Interested = (props) => {
//   const [anlist, setapList] = useState(dataSource);
//   function changeColor(nums) {
//     const newListap = anlist;
//     const numberssIndex = newListap.findIndex((item) => item.id == nums);
//     newListap[numberssIndex].isCheck = !newListap[numberssIndex].isCheck;
//     console.log(numberssIndex);
//     setapList(newListap);
//   }

//   const renderItem = ({item}) => {
//     return <InterestItem item={item} onChange={() => changeColor(item.id)} />;
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <View>
//           <ImageBackground
//             source={require('../assets/change.png')}
//             style={{
//               width: Dimensions.get('window').width,
//               height: Dimensions.get('window').height / 2.7,
//             }}></ImageBackground>
//         </View>
//         <View style={styles.container}>
//           <View style={styles.mottoAndFlat}>
//             <View style={styles.mottoView}>
//               <Text style={styles.mottoText}>
//                 Which Topic Are You Interested In
//               </Text>
//             </View>

//             <View style={styles.flat}>
//               <FlatList
//                 data={dataSource}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//               />
//             </View>
//           </View>

//           <View style={styles.getView}>
//             <TouchableOpacity
//               onPress={() => selectPage()}
//               style={styles.button}>
//               <Text style={styles.buttonText}>Continue</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export {Interested};

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'space-around',
//     // borderWidth: 2,
//     // borderColor: 'orange',
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   mottoAndFlat: {
//     // borderWidth: 4,
//     // borderColor: 'black',
//     flex: 3,
//     alignItems: 'center',
//   },
//   mottoView: {
//     flex: 1,
//     // borderWidth: 2,
//     // borderColor: 'purple',
//     justifyContent: 'center',
//   },
//   mottoText: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     letterSpacing: 1,
//   },
//   flat: {
//     // borderWidth: 2,
//     // borderColor: 'red',
//     flex: 3,
//   },
//   getView: {
//     flex: 1,
//     // borderWidth: 2,
//     // borderColor: 'blue',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#66bb6a',
//     width: Dimensions.get('window').width / 2,
//     height: Dimensions.get('window').height / 19,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     letterSpacing: 1,
//     color: 'white',
//   },
// });

// import React,{useState} from 'react';
// import {
//   SafeAreaView,
//   Dimensions,
//   View,
//   Text,
//   FlatList,
//   ImageBackground,
//   TouchableHighlight,
//   ScrollView,
// } from 'react-native';
// const numbers = [1, 5, 10, 15];
// import {NumberItem, Button, InterestItem} from '../components';
// import {numberItem, enterPoem, interestItem} from '../styles';

// const imageBaseUrl = 'https://images.unsplash.com/photo-';
// const imageParameters = '?auto=format&fit=crop&w=375&q=80';

// const dataSource = [
//   {
//     id:0,
//     category: 'Love',
//     isCheck: false,
//     uri:
//     require("../assets/loves.jpg"),

//   },
//   {id:1,
//     category: 'Natural',
//     isCheck: false,
//     uri:require("../assets/nature.jpg"),
//   },
//   {id:2,
//     category: 'Epic',
//     isCheck: false,
//     uri:
//     require("../assets/epic.jpg"),
//   },
//   {id:3,
//     category: 'Dramatic',
//     isCheck: false,
//     uri: require("../assets/drama.jpg"),
//   },
//   {id:4,
//     category: 'Sonnet',
//     isCheck: false,
//     uri:require("../assets/sonnet.jpg"),
//   },
//   {id:5,
//     category: 'Elegy',
//     isCheck: false,
//    uri:require("../assets/elegy.jpg"),
//   },

// ];

// const Interested = (props) => {
//   const [anlist, setapList] = useState(dataSource);
//   function selectPage() {
//     props.navigation.navigate('Begin');
//   }
//   function changeColor(nums) {
//     const newListap = anlist;
//     const numberssIndex = newListap.findIndex((item) => item.id == nums);
//     newListap[numberssIndex].isCheck = !newListap[numberssIndex].isCheck;
//     console.log(numberssIndex);
//     setapList(newListap);
//   }

//   const renderItemData = ({item}) => {
//     return <InterestItem item={item} onChange={() => changeColor(item.id)} />;
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={interestItem.general}>
//         <View style={interestItem.poemContainer}>
//           <Text style={interestItem.poemText}>
//             Which Topic Are You Interested In?
//           </Text>
//         </View>
//         <View style={interestItem.viewNumbersInt}>
//           <FlatList
//             data={anlist}
//             renderItem={renderItemData}
//             keyExtractor={(_, index) => index.toString()}
//             numColumns={2}
//           />
//         </View>
//         <View style={interestItem.buttonView}>
//           <Button onSelect={() => selectPage()} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export {Interested};
