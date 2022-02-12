import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMyIP, loading, error } from '../redux/sliceReducer/counterSlice';
const API_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const getIP = createAsyncThunk('ip/getData', async (_, { dispatch }) => {
    try {
        dispatch(loading(true));
        const res = await fetch(`${API_URL}`);
        const { ip } = await res.json();
        const data = await fetch(`https://ipinfo.io/${ip}/?token=${API_KEY}`);
        const json = await data.json();
        dispatch(loading(false));
        dispatch(getMyIP({ ip, ...json }));
    } catch (err) {
        dispatch(loading(false));
        dispatch(error('Произошла ошибка. Попробуйте еще раз'));
    }
});
