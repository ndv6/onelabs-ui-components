import React from 'react';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'transparent';
    size?: 'small';
    rounded?: boolean;
    children?: React.ReactNode;
    className?: string;
    full?: boolean;
    href?: string;
    loading?: boolean;
    anchor?: boolean;
}
declare function Button(props: Props): JSX.Element;
export default Button;
