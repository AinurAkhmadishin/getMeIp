import React, {FC, useEffect} from 'react';
import { getIP } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Spinner } from '../../UI/Spinner/Spinner';
import { Article } from '../../components/article/Article';

export const MyIp:FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getIP());
    }, []);
    const { ip, loading, error, city, region, timezone } = useAppSelector((state) => state.counterSlice);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : error ? (
                <div>{error}</div>
            ) : (
                <Article ip={ip} city={city} region={region} timezone={timezone} />
            )}
        </>
    );
};
