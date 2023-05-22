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
import {Button, View, Text, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import constantStrings from '../constants/RoutesString';

import DrawerNavigator from './DrawerNavigator';
import SignIn from '../screens/auth/SignInScreen';
import SignUp from '../screens/auth/SignUpScreen';

import ForgotPassword from '../screens/auth/ForgotPasswordScreen';
import NewPassword from '../screens/auth/NewPasswordScreen';

import Header from '../header/Header';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function EmptyScreen() {
  return <View />;
}

function SignOut({navigation}) {
  navigation.navigate('RootSignedOut', {screen: SignIn});
  // return (
  //   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //     <Text>SignOut Screen</Text>
  //   </View>
  // );
}



function RootSignedOut() {
  //  const signedIn = true;
  //  const signedStatus = signedIn === true ? 'SignIn' : 'SignOut';

  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerLeft: () => (
          ""
        ),
      })}>
      {/* <Drawer.Screen
        name={signedStatus}
        component={signedIn === false ? SignIn : SignOut}
      /> */}
      <Drawer.Screen name="SignIn" component={SignIn} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      {/* <Stack.Screen name="NewPassword" component={NewPassword} /> */}
    </Drawer.Navigator>
  );
}

function RootSignedIn() {
  const signedIn = true;
  const signedStatus = signedIn === false ? 'SignIn' : 'SignOut';

  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerLeft: () => (
          ""
        ),
      })}>
      <Drawer.Screen
        name={signedStatus}
        component={signedIn === true ? SignIn : SignOut}
      />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Drawer.Navigator>
  );
}




function AuthNavigator() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerLeft: () => (
          ""
        ),
      }}>
        {isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="RootSignedIn" component={RootSignedIn} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={DrawerNavigator} options={{headerShown: false}}/>
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{headerShown: true}}>
            <Stack.Screen name="RootSignedOut" component={RootSignedOut} options={{headerTitle: () => <Header title=' PetsFinder' />}} />
            <Stack.Screen name="Home" component={DrawerNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="NewPassword" component={NewPassword} />
            
            {/* <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} /> */}
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default AuthNavigator;
