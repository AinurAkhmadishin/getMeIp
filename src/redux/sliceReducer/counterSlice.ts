import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getIP} from "../../api/api";

interface ICounterState {
    ip: string;
    city: string;
    region: string;
    timezone: string;
    loading: boolean;
    error: string;
}

const initialState: ICounterState = {
    ip: '',
    city: '',
    region: '',
    timezone: '',
    loading: false,
    error: '',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {}
    ,extraReducers:{
        [getIP.fulfilled.type]:(state, action:PayloadAction<ICounterState>) => {
            const { ip, city, timezone, region } = action.payload;
            state.ip = ip;
            state.city = city;
            state.timezone = timezone;
            state.region = region;
            state.loading = false
        },
        [getIP.pending.type]:(state) => {
    state.loading = true},
        [getIP.rejected.type]:(state, action:PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload;
        }

    }
});


//export const { getMyIP, loading, error } = counterSlice.actions;

export default counterSlice.reducer;
