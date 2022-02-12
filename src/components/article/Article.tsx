import React, { FC } from 'react';

interface IArticle {
    ip: string;
    city: string;
    timezone: string;
    region: string;
}

export const Article: FC<IArticle> = ({ ip, city, timezone, region }) => {
    return (
        <>
            <div>Ваш IP адрес: {ip}</div>
            <div>Ваш город: {city}</div>
            <div>Часовой пояс: {timezone}</div>
            <div>Регион {region}</div>
        </>
    );
};
