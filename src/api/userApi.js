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

// todo: the code is in raw stay, need add more functional
import ApiManager from "./ApiManager";

export const user_login = async (params, data) => {
    try {
        const result = await ApiManager("/user", {
            method:"GET",           
            params:params,
            headers: {
                'Content-Type': 'application/json',
            },
            data:data
        })
        return result;
    } catch (error) {
        console.log(error);
        return error.message;//.response.data
    }

    
};