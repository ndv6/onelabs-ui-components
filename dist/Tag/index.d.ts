import React from 'react';
interface Props {
    closeable?: boolean;
    color?: 'red' | 'default' | 'green' | 'grey';
    children?: React.ReactNode;
    onClose?: (args: boolean) => void;
    visible?: boolean;
    className?: string;
}
declare function Tag(props: Props): JSX.Element | null;
export default Tag;
