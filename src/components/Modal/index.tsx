import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import { createClassName } from '../helpers';
import styles from './Modal.module.css';

const ArrowSvg = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.46706 5.01575L9.82282 1.65999C10.0169 1.46591 10.0169 1.15095 9.82282 0.956562L9.04307 0.176811C8.84899 -0.0172703 8.53403 -0.0172703 8.33964 0.176811L4.98419 3.53289L1.62843 0.177122C1.43435 -0.0169587 1.11939 -0.0169587 0.925 0.177122L0.145561 0.956562C-0.0485203 1.15064 -0.0485203 1.4656 0.145561 1.65999L3.50132 5.01575L0.145561 8.37152C-0.0485203 8.5656 -0.0485203 8.88055 0.145561 9.07494L0.925312 9.85469C1.11939 10.0488 1.43435 10.0488 1.62874 9.85469L4.98419 6.49862L8.33995 9.85438C8.53403 10.0485 8.84899 10.0485 9.04338 9.85438L9.82313 9.07463C10.0172 8.88055 10.0172 8.5656 9.82313 8.3712L6.46706 5.01575Z"
      fill="#313131"
    />
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
  title?: string | ReactNode;
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
                <ArrowSvg />
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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.label}>{props.title}</div>
          <Button style={{ marginLeft: 'auto' }} onClick={props.onClose}>
            <ArrowSvg />
          </Button>
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>,
    el,
  );
}

export default Modal;
