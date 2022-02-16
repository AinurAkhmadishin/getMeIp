import React, { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
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
