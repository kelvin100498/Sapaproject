import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';
import {SafeAreaView, View, Text, TextInput,TouchableOpacity, Image,StatusBar} from 'react-native';
import COLORS from '../src/Color'
import {
  LogingScreens,
  SignupScreens,
  Home,
  Splash,
  CallScreen,
  StatusScreen,
} from '../src/Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          marginHorizontal: 16,
          borderRadius: 40,
        },
      }}>
      <Tab.Screen
        name="CHAT"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarLabel: 'CHAT',
          tabBarIcon: ({focused, color}) => (
            <Icon name="chat" type={focused ? Icon.activeIcon : Icon.inActiveIcon} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="STATUS"
        component={StatusScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarLabel: 'STATUS',
          tabBarIcon: ({focused, color}) => (
            <Icon name="stumbleupon-with-circle" type={focused ? Icon.activeIcon : Icon.inActiveIcon} color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="PANGILAN"
        component={CallScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarLabel: 'PANGGILAN',
          tabBarIcon: ({focused, color}) => (
            <Icon name="phone" type={focused ? Icon.activeIcon : Icon.inActiveIcon} color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRoutename="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LogingScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginVertical: 13
 
  }
});
