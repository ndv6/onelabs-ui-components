import { ReactNode, MouseEventHandler } from 'react';
interface CardExpandProps {
    active?: boolean;
    closeIcon?: boolean;
    onClose?: MouseEventHandler;
    expand?: boolean;
    children: {
        title?: ReactNode;
        content?: ReactNode;
        action?: ReactNode;
    };
}
declare function CardExpand(props: CardExpandProps): JSX.Element;
export default CardExpand;
