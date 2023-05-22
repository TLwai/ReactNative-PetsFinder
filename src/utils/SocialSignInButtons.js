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

import FlatButton from './FlatButton';
import ColorString from '../constants/ColorStr';

// todo:chage to use the localStyle.js
export default SocialSignInButtons = () => {
  return (
    <>
      <FlatButton
        title="Sign In with Facebook"
        onPress={() => {
          // todo facebook signin
        }}
        bgColor= {ColorString.facebookBtnBgColor}
        fgColor={ColorString.facebookBtnFgColor}
      />
      <FlatButton
        title="Sign In with Google"
        onPress={() => {
          // todo google signin
        }}
        
        bgColor={ColorString.googleBtnBgColor}
        fgColor={ColorString.googleBtnFgColor}
      />
      <FlatButton
        title="Sign In with Twitter"
        onPress={() => {
           // todo twitter signin
        }}
        bgColor={ColorString.twitterBtnBgColor}
        fgColor={ColorString.twitterBtnFgColor}
      />
    </>
  );
};
