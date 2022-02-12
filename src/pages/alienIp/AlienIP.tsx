import React from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

export const AlienIp = () => {
    return (
        <form>
            <Input placeholder="xxx.xxx.xxx.xxx" type="ip" />
            {/*<Button value="Получить данные" />*/}
        </form>
    );
};
