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

export const localStyle = StyleSheet.create({

  
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

  signUpRootView: {
    alignItems: 'center',
    padding: 20,
  },
  signUpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  signUpText: {
    color: 'grey',
    marginVertical: 10,
  },
  signUpLink: {
    color: '#FDB075',
  },
  customBtnText: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  customBtn: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  
  customInputContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 42,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  customInput: {
    fontSize: 16,
    marginVertical: 0,
  },
  flatBtn: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 5,
    //backgroundColor: '#3b71F3',
    width: 350,
    marginTop: 5,
  },
  flatBtn_PRIMARY: {
    backgroundColor: '#3b71F3',
  },
  flatBtn_SECONDARY: {
    backgroundColor: '#f01d71',
    borderColor: '#3b71f3',
    borderWidth: 2,
  },
  flatBtnText_TERTIARY: {
    color: '#555555',
  },
  flatBtnText_WARNING: {
    color: '#f01d71',
  },
  flatBtnText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'center',
  },
  flatBtnText_PRIMARY: {
    color: 'white',
  },

  flatBtnText_SECONDARY: {
    color: '#3B71F3',
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
