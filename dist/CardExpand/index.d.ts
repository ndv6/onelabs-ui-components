import { ReactNode, MouseEventHandler } from 'react';
interface CardExpandProps {
    active?: boolean;
    closeIcon?: boolean | ReactNode;
    onClose?: MouseEventHandler;
    expand?: boolean;
    variant?: 'default' | 'success';
    children: {
        title?: ReactNode;
        content?: ReactNode;
        action?: ReactNode;
    };
}
declare function CardExpand({ active, closeIcon, onClose, expand, variant, children, }: CardExpandProps): JSX.Element;
export default CardExpand;
