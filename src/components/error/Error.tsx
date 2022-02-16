import React, { FC } from 'react';
import './error.scss';

interface IError {
  error: string;
}

const Error: FC<IError> = ({ error }) => {
  const err = error && <div className="error">{error}</div>;
  return <>{err}</>;
};

export default Error;
