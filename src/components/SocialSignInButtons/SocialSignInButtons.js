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
import React from 'react';
//import {View, Text} from 'react-native';
import FlatButton from '../../utils/FlatButton';
// todo:chage to use the localStyle.js
export default SocialSignInButtons = () => {
  return (
    <>
      <FlatButton
        title="Sign In with Facebook"
        onPress={() => {
          // todo facebook signin
        }}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <FlatButton
        title="Sign In with Google"
        onPress={() => {
          // todo google signin
        }}
        //bgColor="#FAE9EA"
        bgColor="orange"
        fgColor="green"
      />
      <FlatButton
        title="Sign In with Twitter"
        onPress={() => {
           // todo twitter signin
        }}
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </>
  );
};
