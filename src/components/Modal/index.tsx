import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import { createClassName } from '../helpers';
import styles from './Modal.module.css';

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="#313131"
      fill-rule="evenodd"
      d="M8.24 11.458l6.212-6.212c.3-.3.786-.3 1.085 0l.725.724c.3.3.3.784.001 1.084L11.34 12l4.923 4.946c.298.3.298.785-.001 1.084l-.725.725c-.3.299-.785.299-1.085 0L8.24 12.542c-.3-.3-.3-.785 0-1.084z"
    ></path>
  </svg>
);

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
