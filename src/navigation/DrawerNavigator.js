/**
 * Copyright (c) Wai L.
 *
 * This source code is licensed under the ___ license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @created by:     Wai L
 * @created date:   16/5/2023
 * @modified by:    Wai L
 * @modified date:  16/5/2023
 */

// todo: need to remove those unused code
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SignIn from '../screens/auth/SignInScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../header/Header';

const Drawer = createDrawerNavigator();

function EmptyScreen() {
  return <View />;
}

function SignOut({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignOut Screen</Text>
    </View>
  );
}
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      options={{
        headerTitle: () => <Header title=' PetsFinder' />,
        
      }}
      screenOptions={({route}) => ({
        headerShown: true,
        
      })}>
      <Drawer.Screen
        name="Home Tab"
        component={TabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
          headerTitle: () => <Header title=' PetsFinder' />,
          headerTransparent: false, headerLeft: false
        }}
      />
      <Drawer.Screen name="Sign Out" component={SignOut} 
              options={{
                title: 'Sign Out',
                drawerIcon: ({focused, color, size}) => (
                  <Icon name="log-out" size={18} color={color} />
                ),
              }}/>
    </Drawer.Navigator>
  );
}

