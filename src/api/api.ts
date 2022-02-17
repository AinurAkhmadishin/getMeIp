import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const getData = async (ip: string) => {
  try {
    const data = await fetch(`https://ipinfo.io/${ip}/?token=${API_KEY}`);
    return await data.json();
  } catch (err) {
    throw new Error('Ошибка запроса.Попробуйте снова');
  }
};

export const getIP = createAsyncThunk('ip/getIP', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(`${API_URL}`);
    const { ip } = await res.json();
    return await getData(ip);
  } catch (err) {
    // @ts-ignore
    return rejectWithValue(err.message);
  }
});

export const getIpAndData = createAsyncThunk('ip/getIP', async (ip: string, { rejectWithValue }) => {
  try {
    return await getData(ip);
  } catch (err) {
    // @ts-ignore
    return rejectWithValue(err.message);
  }
});
