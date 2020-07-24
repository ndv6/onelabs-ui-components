import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import { ReactComponent as ArrowSvg } from './arrowLeft.svg';
import { createClassName } from '../helpers';
import styles from './Modal.module.css';

const classNames = createClassName(styles);

const body = document.getElementsByTagName('body')[0];
if (!document.getElementById('modal-portal')) {
  const el = document.createElement('div');
  el.setAttribute('id', 'modal-portal');
  body.appendChild(el);
}

interface Props {
  children: ReactNode;
  className?: string;
  onClose: () => void;
  hideCloseButton?: boolean;
  title: string | ReactNode;
  type?: 'default' | 'fullscreen';
}

function Modal(props: Props) {
  const modalRoot: any = document.getElementById('modal-portal');
  const el = document.createElement('div');
  const type = props.type === 'fullscreen' ? 'fullscreen' : 'default';
  const classnames = classNames({
    modal: true,
    [`${props.className}`]: !!props.className,
    [`${type}`]: !!type,
  });

  React.useEffect(() => {
    modalRoot.appendChild(el);
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'auto';
      modalRoot.removeChild(el);
    };
  }, [props.className, el, modalRoot]);

  if (type === 'default') {
    return ReactDOM.createPortal(
      <div className={classnames}>
        <Card>
          <div className={styles.content}>
            {!props.hideCloseButton && (
              <Button className={styles.close} onClick={props.onClose}>
                X
              </Button>
            )}
            <div>{props.children}</div>
          </div>
        </Card>
      </div>,
      el,
    );
  }
  return ReactDOM.createPortal(
    <div className={classnames}>
      <div className={styles.header}>
        <Button onClick={props.onClose}>
          <ArrowSvg />
        </Button>
        <div className={styles.label}>{props.title}</div>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>,
    el,
  );
}

export default Modal;
