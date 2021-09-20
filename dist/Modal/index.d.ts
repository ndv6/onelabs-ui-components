import React, { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
    onClose: () => void;
    hideCloseButton?: boolean;
    title?: string | ReactNode;
    type?: 'default' | 'fullscreen';
}
declare function Modal(props: Props): React.ReactPortal;
export default Modal;
