/**
 * Copyright (c) Wai L.
 *
 * This source code is licensed under the ___ license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @created by:     Wai L
 * @created date:   26/5/2023
 * @modified by:    Wai L
 * @modified date:  26/5/2023
 */
// moden redux
import {createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
//    value: number;
    missing: number;
    found: number;
}

const initialState: CounterState = {
//    value: 0,
    missing:  10,
    found: 10
}

const counterSlice = createSlice ({
    name: 'counts',
    initialState,
    reducers :{
        //
        setMissing(state, action: PayloadAction<number>) {
            state.missing = action.payload;
        },
        // setFound(state, action: PayloadAction<number>) {
        //     state.found = action.payload;
        // },
    }
});

export const { setMissing, setFound } = counterSlice.actions;
export default counterSlice.reducer;