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

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
//import GlobalStyle from '../utils/LocalStyle';
import { DrawerActions } from '@react-navigation/native';

export default function Setting({navigation, route}) {

  console.log('setting')

           
  return (
    <View>
      <Text>
        Welcome
      </Text>
      <CustomButton
        title="open Drawer"
        color="#0070ee"
        onPressFunction={() => { 

          navigation.goBack();
          navigation.openDrawer();
        }}
      />
    </View>
  );
}



  