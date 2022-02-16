import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getIP, getIpAndData } from '../../api/api';

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
  city: 'нет данных',
  region: 'нет данных',
  timezone: 'нет данных',
  loading: false,
  error: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clearState: state => {
      state.ip = '';
    },
    clearError: state => {
      state.error = '';
    },
  },
  extraReducers: {
    [getIP.fulfilled.type]: (state, action: PayloadAction<ICounterState>) => {
      const { ip, city, timezone, region } = action.payload;
      state.ip = ip;
      state.city = city;
      state.timezone = timezone;
      state.region = region;
      state.loading = false;
    },
    [getIP.pending.type]: state => {
      state.loading = true;
    },
    [getIP.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getIpAndData.fulfilled.type]: (state, action: PayloadAction<ICounterState>) => {
      const { ip, city, timezone, region } = action.payload;
      state.ip = ip;
      state.city = city;
      state.timezone = timezone;
      state.region = region;
      state.loading = false;
    },
    [getIpAndData.pending.type]: state => {
      state.loading = true;
    },
    [getIpAndData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clearState, clearError } = counterSlice.actions;

export default counterSlice.reducer;
