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
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/pawprints.jpg';
import CustomInput from '../../utils/CustomInput';
import FlatButton from '../../utils/FlatButton';

import {user_login} from '../../api/userApi';
import axios from 'axios';

import SocialSignalInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { localStyles } from '../../utils/LocalStyle';

const SignIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onChangeUsername = val => {
    setUsername(val);
  };

  const onSignInPressed = async () => {
    // todo
    // 1. Simple validation the username & password
    // 2. Web API for checking the login & password
    if (username.length == 0) {
        Alert.alert("Sign In", "Error: Please input the Username!");
    }
    else if (password.length == 0) {
        Alert.alert("Sign In", "Error: Please input the Password");
    } else {
      navigation.navigate('Home', {screen: 'Missing'});
    }
  };

  const onForgotPasswordPressed = () => {
    console.log('onForgotPasswordPressed');
    //console.log('${v}' + v);
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <View style={localStyles.signInView}>
        <Image
          source={Logo}
          style={[localStyles.signInLogo, {height: height * 0.4}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          onChangeText={onChangeUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <FlatButton
          title="Sign In"
          onPress={onSignInPressed}
          type="PRIMARY"></FlatButton>
        <FlatButton
          title="Forgot password"
          onPress={() => onForgotPasswordPressed()}
          type="WARNING"></FlatButton>
        {/* Social Sign On Buttons */}
        <SocialSignalInButtons navigation={navigation} />

        <FlatButton
          title="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </View>
  );
};



export default SignIn;
