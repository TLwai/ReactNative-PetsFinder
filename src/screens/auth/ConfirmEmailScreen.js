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
import React, {useState, Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//todo relocate those shared stubb into the ncFramework
import CustomInput from '../../utils/CustomInput';
import FlatButton from '../../utils/FlatButton';



const ConfirmEmailScreen = () => {
  const {code, setCode} = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    //todo:
    console.log('onConfirmPressed');
  };

  const onResendPress = () => {
    //todo:
    console.log('onResendPressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <FlatButton
          title="Confirm"
          onPress={() => {
            onConfirmPressed;
          }}
          type="PRIMARY"></FlatButton>

        <FlatButton
          title="Resend code"
          onPress={() => {
            onResendPress;
          }}
          type="SECONDARY"
        />

        <FlatButton
          title="Back to Sign in"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
