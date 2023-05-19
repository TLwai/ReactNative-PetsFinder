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
import React, { useState, Component } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../utils/CustomInput';
import FlatButton from '../../utils/FlatButton';
//import Navigator from '../routes/drawer';
import SocialSignalInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignUpScreen = () => {
    const { username, setUsername } = useState('');
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { passwordRepeat, setPasswordRepeat } = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.log('onRegisterPressed');
           navigation.navigate("ConfirmEmail");
    }

    const onForgotPasswordPressed = (v) => {
        console.log('onForgotPasswordPressed');
        console.log('${v}' + v);
    }

    const onTermsOfUsePressed = () => {

    }

    const onPrivacyPressed = () => {

    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />

                <FlatButton title="Register" onPress={ onRegisterPressed } type="PRIMARY"></FlatButton>
                <Text style={styles.text}>
                    By registering, you confirm that you accept our {' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>

                <SocialSignalInButtons />
                <FlatButton
                    title="Have an account? Sign In"
                    onPress={() => { navigation.navigate("SignIn") }}
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
    }
});


export default SignUpScreen;