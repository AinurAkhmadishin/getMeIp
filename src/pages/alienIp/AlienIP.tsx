import React, { useEffect, useLayoutEffect } from 'react';
import { Modal } from 'react-materialize';
import { Search } from '../../components/Search/Search';
import { Spinner } from '../../UI/Spinner/Spinner';
import { Article } from '../../components/article/Article';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { clearError, clearState } from '../../redux/sliceReducer/counterSlice';
import Error from '../../components/error/Error';

export const AlienIp = () => {
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(clearState());
    dispatch(clearError());
  }, []);

  const { ip, loading, city, region, timezone, error } = useAppSelector(state => state.counterSlice);

  const context = loading ? <Spinner /> : ip && <Article city={city} region={region} timezone={timezone} ip={ip} />;
  return (
    <>
      <Search />
      {context}
      <Error error={error} />
    </>
  );
};
