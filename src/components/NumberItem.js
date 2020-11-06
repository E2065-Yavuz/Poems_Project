import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableHighlight
} from 'react-native';

import {numberItem} from '../styles';

const NumberItem = (props) => {
  // console.log(props.item.isCheck)
  return (
    <TouchableHighlight
    onPress={()=>props.onChange()}
    style={[numberItem.container,{backgroundColor:props.item.isCheck ? "blue":"black"}]}>
      <Text style={numberItem.text}>{props.item.number}</Text>
    </TouchableHighlight>
  );
};

export {NumberItem};
// {backgroundColor:props.item.isCheck?"#2196f3":"black"}
