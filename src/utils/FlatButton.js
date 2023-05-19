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
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'

const FlatButton = ({ title, onPress, type = "PRIMARY", bgColor, fgColor }) => (
  // <TouchableOpacity onPress={onPress}>
  <Pressable
    onPress={onPress}
    style={[styles.button,
    styles['button_' + type],
    bgColor ? { backgroundColor: bgColor } : {}
    ]}>
    {/* <View > */}
    <Text
      style={[styles.buttontext,
      styles['buttontext_' + type],
      fgColor ? { color: fgColor } : {}
      ]}> {title}</Text>
    {/* </View> */}
  </Pressable>
  // </TouchableOpacity>
)

export default FlatButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 5,
    //   backgroundColor: '#3b71F3',
    width: 350,
    marginTop: 5,
  },
  button_PRIMARY: {
    //   backgroundColor: '#f01d71',
    backgroundColor: '#3b71F3',

  },
  button_SECONDARY: {
    backgroundColor: '#f01d71',
    borderColor: '#3b71f3',
    borderWidth: 2,
  },
  buttontext_TERTIARY: {
    color: '#555555',
  },
  buttontext_WARNING: {
    color: '#f01d71',
  },
  
  buttontext: {

    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',textAlign: 'center',
  },

  buttontext_PRIMARY: {
    color: 'white',
  },

  buttontext_SECONDARY: {
    color: '#3B71F3',
  }

})


