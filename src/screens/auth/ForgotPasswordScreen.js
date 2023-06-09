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

import CustomInput from '../../utils/CustomInput';
import FlatButton from '../../utils/FlatButton';
import { useNavigation } from '@react-navigation/native';
import { forgotPasswordScreen } from '../../utils/styles';

const ForgotPasswordScreen = ({navigation}) => {
    const { code, setCode } = useState('');
    const { height } = useWindowDimensions();

    const onSendPressed = () => {
        console.log('onSendPressed');
        navigation.navigate('NewPassword');
    }

    const onTermsOfUsePressed = () => {

    }

    const onPrivacyPressed = () => {

    }
    const onResendPress = () => {
        console.log('onResendPressed');
    }

    return (
        <ScrollView>
            <View style={forgotPasswordScreen.root}>
                <Text style={forgotPasswordScreen.title}>Reset your password</Text>
                <Text
                    style={forgotPasswordScreen.label}
                >Username/Email*
                </Text>
                <CustomInput
                    placeholder="Enter your username/email"
                    value={code}
                    setValue={setCode}
                />


                <FlatButton
                    title="Send"
                    onPress={ onSendPressed }
                    type="PRIMARY"
                />


                <FlatButton
                    title="Back to Sign in"
                    onPress={() => { navigation.navigate("SignIn") }}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};




export default ForgotPasswordScreen;