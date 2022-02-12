import React from 'react';
import './input.module.scss';

interface IInput {
    placeholder: string;
    type?: string;
    className?: string;
    pattern?: string;
}

const Input = ({ placeholder, type, className, ...rest }: IInput) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className={className} {...rest} />
        </>
    );
};

export default Input;
