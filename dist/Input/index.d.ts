import React, { ReactNode } from 'react';
declare type INPUT_TYPE = 'number' | 'alphabet' | 'password' | 'text' | undefined;
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactNode;
    error?: any;
    className?: string;
    loading?: boolean;
    required?: boolean;
    icon?: any;
    innerRef?: any;
    maxLength?: number;
    type?: INPUT_TYPE;
}
declare function Input(props: Props): JSX.Element;
export default Input;
