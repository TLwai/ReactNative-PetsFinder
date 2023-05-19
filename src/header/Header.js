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
import { images } from '../utils/LocalStyle'

const Header = ({ title }) => {

 return (
    <ImageBackground
      style={styles.header}
      source={images.headerBackground}
    >
      {/* <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} /> */}
      <View style={styles.headerContent}>
        <Image
          source={images.headerImage}
          style={styles.headerImage}
        />
        <Text style={styles.headerText} >{title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333',
    letterSpacing: 1,
  },
  headerContent: {
    flexDirection: 'row'
  },
  icon: {
    position: 'absolute',
    left: 1,
  },
  headerImage: {
    height: 34,
    width: 28,
    marginHorizontal: 1,
  }

})

export default Header
