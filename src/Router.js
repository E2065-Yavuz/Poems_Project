import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

import {
  EnterPoem,
  GetStarted,
  PeriodPoem,
  Interested,
  Begin,
  Bookmark,
  Home,
  Themes,
  Search,
  Settings,
  DetailPage,
} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor:'#d11921',
        inactiveTintColor:'black',
        labelStyle: {
          fontSize: 10,
          paddingBottom: 5,
          // color: 'blue',
          // fontWeight: 'bold',
        },
        // inactiveBackgroundColor: 'lightgrey',
        // activeBackgroundColor: '#e0e0e0',
        
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="feather" color={color} size={20}/>,
        }}
        name="Home"
        component={Home}>
        {/* <NavigationContainer>
        <Tab.Screen name="DetailPage" component={DetailPage} />
        </NavigationContainer> */}
        </Tab.Screen>

      <Tab.Screen
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({color}) => (
            <Icon name="book-outline" color={color} size={20} />
          ),
        }}
        name="Bookmark"
        component={Bookmark}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({color}) => (
            <Icon name="book-open-page-variant" color={color} size={20} />
          ),
        }}
        name="Themes"
        component={Themes}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <Icon name="cog" color={color} size={20} />,
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="EnterPoem" component={EnterPoem} />
        <Stack.Screen name="Interest" component={Interested} />
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
