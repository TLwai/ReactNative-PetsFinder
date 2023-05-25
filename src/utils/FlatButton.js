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
// todo:chage to use the localStyle.js
// todo: need to remove those no use code
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
//import {localStyle} from './LocalStyle';
import { flatBtn } from './styles';

const FlatButton = ({title, onPress, type = 'PRIMARY', bgColor, fgColor}) => (
  // <TouchableOpacity onPress={onPress}>
  <Pressable
    onPress={onPress}
    style={[
      flatBtn.button, 
      flatBtn[type],
      bgColor ? {backgroundColor: bgColor} : {},
    ]}>
    {/* <View > */}
    <Text 
    style={[flatBtn.text,
      flatBtn['Text_'+ type], 
      fgColor ? {color: fgColor} : {}]}>
      {' '}
      {title}
    </Text>
    {/* </View> */}
  </Pressable>
  // </TouchableOpacity>
);

export default FlatButton;


