import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  Dimensions
} from 'react-native';


const InterestItem = (props) => {
  return (
    <Pressable
      onPress={() => props.onChange()}
      style={() => [
        styles.container,
        {backgroundColor: props.item.isCheck ? 'green' : '#fedbd0'},
      ]}>
      {() => (
        <Text
          style={[
            styles.text,
            {color: props.item.isCheck ? '#212121' : 'black'},
          ]}>
          {props.item.category}
        </Text>
      )}
    </Pressable>
  );
};

export {InterestItem};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: Dimensions.get('window').width *0.30,
    aspectRatio:1,
    justifyContent: 'center',
    alignContent: 'center',
    // borderWidth: 4,
    // borderColor: "#2196f3",
    margin:Dimensions.get("window").width*0.01,
    borderColor:"black",
    borderWidth:2,
    
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
  },
})







// import React from 'react';
// import {
//   Text,
//   Pressable,
//   StyleSheet,
//   Dimensions
// } from 'react-native';


// const InterestItem = (props) => {
//   return (
//     <Pressable
//       onPress={() => props.onChange()}
//       style={() => [
//         styles.container,
//         {backgroundColor: props.item.isCheck ? '#b0bec5' : '#a5d6a7'},
//       ]}>
//       {() => (
//         <Text
//           style={[
//             styles.text,
//             {color: props.item.isCheck ? '#212121' : 'white'},
//           ]}>
//           {props.item.category}
//         </Text>
//       )}
//     </Pressable>
//   );
// };

// export {InterestItem};

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 6,
//     width: Dimensions.get('window').width / 2.6,
//     height: Dimensions.get('window').height / 15,
//     justifyContent: 'center',
//     alignContent: 'center',
//     // borderWidth: 1,
//     // borderColor: "#2196f3",
//     margin: 3,
//   },
//   text: {
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     fontSize: 16,
//   },
// })







// {uri:`${props.item.uri}`.toString()}

{
  /* <Pressable onPress={() => props.onChange()} style={[picItem.general,{margin:3,borderRadius:28}]}>
{({pressed}) => (
  <ImageBackground
    source={props.item.uri}
    imageStyle={{borderRadius: 28}}
    style={{
      width: Dimensions.get('window').width / 3,
      height: Dimensions.get('window').height / 7,
      justifyContent: 'center',
      margin: 0,
    }}>
    <Pressable
     
      style={({}) => [
        picItem.pressableStyle,
        {backgroundColor: props.item.isCheck ? 'white' : null},
      ]}>
      <Icon
        style={{display: props.item.isCheck ? 'flex' : 'none'}}
        name="check"
        size={30}
        color="black"
      />
    </Pressable>
    <Text
      style={{
        textAlign: 'center',
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
      }}>
      {props.item.category}
    </Text>
  </ImageBackground>
)}
</Pressable> */
}
