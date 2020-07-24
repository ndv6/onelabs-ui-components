import { ReactNode } from 'react';
export default function ModalSelect(props: {
    onSelect: Function;
    asyncOptions?: () => Promise<any[]>;
    options: any;
    label: string | ReactNode;
}): JSX.Element;
