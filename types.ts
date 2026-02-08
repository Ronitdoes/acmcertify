import React from 'react';

export interface NavLink {
    name: string;
    href: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}