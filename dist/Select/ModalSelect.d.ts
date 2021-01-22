import { ReactNode } from 'react';
interface Option {
    label?: string | ReactNode;
    value?: any;
    name?: string | ReactNode;
    title?: string | ReactNode;
    id?: any;
    code?: any;
}
export default function ModalSelect(props: {
    onSelect: Function;
    asyncOptions?: () => Promise<any[]>;
    asyncOnSearch?: (keyword: string) => Promise<Option[]>;
    onFilter?: (keyword: string, args: Option[]) => Option[];
    options: any;
    label: string | ReactNode;
    placeholderSearch?: string;
    errorComponent?: ReactNode;
    buttonRefreshText?: string;
}): JSX.Element;
export {};
