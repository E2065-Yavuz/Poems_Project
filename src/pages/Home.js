import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {beginItem, button} from '../styles';
import {CardComponent} from '../components'

const Home = (props) => {

  const renderCardComponent = ({item}) => {
    return(
      <View>
        <CardComponent
        onSelect={()=>props.navigation.navigate('Bookmark')}
        />
        <CardComponent
        onSelect={()=>props.navigation.navigate('Bookmark')}
        />
        <CardComponent
        onSelect={()=>props.navigation.navigate('Bookmark')}
        />
        <CardComponent
        onSelect={()=>props.navigation.navigate('Bookmark')}
        />
        <CardComponent
        onSelect={()=>props.navigation.navigate('Bookmark')}
        />
        <CardComponent
        onSelect={()=>props.navigation.navigate('Bookmark')}
        />
        <CardComponent
        onSelect={()=>props.navigation.navigate('Bookmark')}
        />

      </View>
    )
  }
  return (
    <SafeAreaView>
      <View>
        
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={CardComponent}
          renderItem={renderCardComponent}
        
        />
       

      </View>



    </SafeAreaView>
  );
};

export {Home};
