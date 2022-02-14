import { createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const getIP = createAsyncThunk('ip/getData', async (_, {rejectWithValue}) => {
    try {
       
        const res = await fetch(`${API_URL}`);
        const { ip } = await res.json();
        const data = await fetch(`https://ipinfo.io/${ip}/?token=${API_KEY}`);
       return await data.json();
      
    } catch (err) {
        return rejectWithValue('Ошибка получени данных')
}});
