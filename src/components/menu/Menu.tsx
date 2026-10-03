import React from 'react';
import {S} from './Menu_Styles.ts';

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <S.Link href="">{item}</S.Link>
                    </li>
                })}
             
            </ul>
    );
};