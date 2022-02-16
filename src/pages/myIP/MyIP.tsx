import React, { FC, useEffect } from 'react';
import { getIP } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Spinner } from '../../UI/Spinner/Spinner';
import { Article } from '../../components/article/Article';
import { clearError } from '../../redux/sliceReducer/counterSlice';
import Error from '../../components/error/Error';

export const MyIp: FC = () => {
  const dispatch = useAppDispatch();
  const { ip, loading, city, region, timezone, error } = useAppSelector(state => state.counterSlice);
  useEffect(() => {
    dispatch(getIP());
    dispatch(clearError());
  }, []);

  const context = loading ? <Spinner /> : ip && <Article city={city} region={region} timezone={timezone} ip={ip} />;

  return (
    <div>
      {context}
      <Error error={error} />
    </div>
  );
};
