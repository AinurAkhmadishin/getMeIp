import React from 'react';

interface IButton {
    className?: string;
    value: string;
    onClick: () => void;
}

const Button = ({ className, value, onClick, ...rest }: IButton) => {
    return (
        <button className={className} {...rest} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;
