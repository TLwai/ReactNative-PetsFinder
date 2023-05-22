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
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//import {COLORS} from '../../constants';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  //      backgroundColor: COLORS.bgColor,
      }}>
      <Text>Home!</Text>
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({});