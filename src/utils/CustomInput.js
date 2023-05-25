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
import { View, Text, TextInput, StyleSheet } from 'react-native';
//import { localStyle } from './LocalStyle';
import { customInput } from './styles';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={customInput.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={customInput.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )

}


export default CustomInput;