import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    ip: string;
    city: string;
    region: string;
    timezone: string;
    loading: boolean;
    error: string;
}

const initialState: CounterState = {
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
    reducers: {
        getMyIP: (state, action) => {
            const { ip, city, timezone, region } = action.payload;
            state.ip = ip;
            state.city = city;
            state.timezone = timezone;
            state.region = region;
        },
        loading: (state, action) => {
            state.loading = action.payload;
        },
        error: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { getMyIP, loading, error } = counterSlice.actions;

export default counterSlice.reducer;
