import React, { ReactNode } from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactNode;
    value?: any;
    min?: any;
    max?: any;
    prefix?: string;
    suffix?: string;
    withText?: boolean;
}
declare function InputSlider(props: Props): JSX.Element;
export default InputSlider;
