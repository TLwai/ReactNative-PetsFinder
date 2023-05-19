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
import {StyleSheet} from 'react-native';

export const localStyles = StyleSheet.create({
  CustomFont: {
    fontFamily: 'DancingScript-Regular',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    marginBottom: 10,
    fontFamily: 'nunito-bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    flex: 5,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  signInView: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  signInLogo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 5,
    marginBottom: 15,
  },
});

export const paragraph = StyleSheet.create({
  marginVertical: 8,
  lineHeight: 20,
});

export const images = {
  headerImage: require('../assets/pawprints.jpg'),
  headerBackground: require('../assets/pets_bg.jpg'),
};
