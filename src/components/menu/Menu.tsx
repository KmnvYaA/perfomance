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
                    <S.NavLink
                        to={item.href}
                        smooth={true}
                        activeClass={"active"}
                        spy={true}
                        offset={-40}
                        delay={0.3}
                    >
                        {item.title}
                    </S.NavLink>
                </li>
            ))}
        </ul>
    );
};