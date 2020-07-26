import { ReactNode } from 'react';
interface Option {
    label: string | ReactNode;
    value: any;
}
export default function ModalSelect(props: {
    onSelect: Function;
    asyncOptions?: () => Promise<any[]>;
    asyncOnSearch?: (keyword: string) => Promise<Option[]>;
    onFilter?: (keyword: string, args: Option[]) => Option[];
    options: any;
    label: string | ReactNode;
}): JSX.Element;
export {};
