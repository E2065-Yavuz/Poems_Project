import React from 'react';
import {View, TouchableOpacity, Text,Dimensions,StyleSheet} from 'react-native';
const {width,height}=Dimensions.get("screen")
const Buttons = (props) => {
  return (
      <TouchableOpacity onPress={props.onSelectPage}  style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
  );
};

export {Buttons};

const styles = StyleSheet.create({

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
    fontSize: 22,
    letterSpacing: 1,
    color: 'white',
  },
});
