import React, { ReactNode } from 'react';
interface Option {
    label: string | ReactNode;
    value: any;
}
declare type Modify<T, R> = Omit<T, keyof R> & R;
interface Props extends Modify<React.SelectHTMLAttributes<HTMLSelectElement>, {
    defaultValue?: Option;
    value?: Option;
}> {
    label?: string | ReactNode;
    error?: string | ReactNode | undefined;
    className?: string;
    native?: boolean;
    options?: Option[];
    asyncOptions?: () => Promise<Option[]>;
    loading?: boolean;
    required?: boolean;
}
declare function Select(props: Props): JSX.Element;
export default Select;