import React, { ReactNode } from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactNode;
    error?: string | ReactNode | undefined;
    className?: string;
    loading?: boolean;
    required?: boolean;
    icon?: any;
    innerRef?: any;
}
declare function Input(props: Props): JSX.Element;
export default Input;
