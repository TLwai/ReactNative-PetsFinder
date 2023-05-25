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
import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
//import { MaterialIcons } from '@expo/vector-icons'
//import { images } from '../utils/LocalStyle'
import {images, header} from '../utils/styles'

const Header = ({ title }) => {

 return (
    <ImageBackground
      style={header.header}
      source={images.headerBackground}
    >
      {/* <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} /> */}
      <View style={header.headerContent}>
        <Image
          source={images.headerImage}
          style={header.headerImage}
        />
        <Text style={header.headerText} >{title}</Text>
      </View>
    </ImageBackground>
  )
}


export default Header
