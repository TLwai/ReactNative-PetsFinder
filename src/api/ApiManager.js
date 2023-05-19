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
import axios from "axios";

const ApiManager = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    params: {id: 1 },
    responseType: 'json',
    withCredentials:true,
})

export default ApiManager;