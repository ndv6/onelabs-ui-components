import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'transparent';
    size?: 'small';
    rounded?: boolean;
    children?: React.ReactNode;
    className?: string;
    full?: boolean;
    loading?: boolean;
}
interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'transparent';
    size?: 'small';
    rounded?: boolean;
    children?: React.ReactNode;
    className?: string;
    full?: boolean;
    loading?: boolean;
    disabled?: boolean;
}
declare function Button(props: ButtonProps): JSX.Element;
export declare function Anchor(props: AnchorProps): JSX.Element;
export default Button;
