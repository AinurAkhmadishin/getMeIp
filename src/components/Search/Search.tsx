import React, { ChangeEvent, FC, useState } from 'react';
import InputMask from 'react-input-mask';
import './input.scss';
import Button from '../../UI/Button/Button';
import { beforeMaskedValueChange } from '../../servise/servise';
import { useAppDispatch } from '../../app/store';
import { getIpAndData } from '../../api/api';
import { clearError } from '../../redux/sliceReducer/counterSlice';

export const Search: FC = () => {
  const [state, setState] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(clearError());
    dispatch(getIpAndData(state));
    setState('');
  };
  const btnActive = !state.split('.')[3];

  return (
    <div className="wrapper">
      <InputMask
        mask="999999999999999"
        maskChar={null}
        formatChars={{
          9: '[0-9.]',
        }}
        alwaysShowMask={false}
        beforeMaskedValueChange={beforeMaskedValueChange}
        className="input"
        placeholder="Введите IP xxx.xxx.xxx.xxx"
        onChange={onChange}
        value={state}
      />
      <Button value="Send" className="button" onClick={onClick} disabled={btnActive} />
    </div>
  );
};
