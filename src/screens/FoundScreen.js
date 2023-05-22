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
import LocalStyle from '../utils/LocalStyle';
import Header from '../header/Header';

export default function Found({navigation, route}) {
  return (
    <View style={styles.body}>
        <Header title = "Found"/>
      <Text style={[styles.text]}>
        Welcome Found
      </Text>
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

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     button: {},
//     buttonContainer: {
//       backgroundColor: 'black',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       flexDirection: 'row',
//       height: '10%',
//     },
//     image: {
//       width: '100%',
//       height: '90%',
//     },
//     camButton: {
//       borderStyle: 'solid',
//       borderColor: 'white',
//       borderWidth: 2,
//       borderRadius: 15,
//       padding: 10,
//     },
//     buttons: {},
//     backButton: {
//       backgroundColor: 'white',
//       padding: 10,
//       borderColor: 'black',
//       borderWidth: 3,
//     },
//   });
  