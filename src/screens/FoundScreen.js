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
//import localStyle from '../utils/LocalStyle';
import {foundScreen} from '../utils/styles';
import Header from '../header/Header';

export default function Found({navigation, route}) {
  return (
    <View style={foundScreen.body}>
      <Header title="Found" />
      <Text style={foundScreen.text}>Welcome Found</Text>
      <CustomButton
        title="open Camera"
        color="#0070ee"
        onPressFunction={() => {
          navigation.navigate('Camera');
        }}
      />
    </View>
  );
}

