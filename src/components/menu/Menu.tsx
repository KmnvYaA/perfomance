import React from 'react';
import {S} from './Menu_Styles.ts';

const items = [
    {
        title: 'Main',
        href: 'main',
    },
    {
        title: 'About',
        href: 'about',
    },
    {
        title: 'Skills',
        href: 'skills',
    },
    {
        title: 'Resume',
        href: 'resume',
    },
    {
        title: 'Portfolio',
        href: 'portfolio',
    },
    {
        title: 'Contacts',
        href: 'contacts',
    }
]
export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <S.Link href={`#${item.href}`}>
                        {item.title}
                    </S.Link>
                </li>
            ))}
        </ul>
    );
};