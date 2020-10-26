import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Card from '../Card';
import { createClassName } from '../helpers';
import styles from './Modal.module.css';

const ArrowSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
        <g>
            <g>
                <g fill="#939FAB" transform="translate(-335 -110) translate(335 110)">
                    <circle cx="12" cy="12" r="12"/>
                </g>
                <g fill="#FFF">
                    <path d="M11.463 1.35c.252-.186.61-.166.838.063.252.251.252.659 0 .91L7.766 6.857l4.535 4.536c.252.251.252.659 0 .91-.228.228-.586.25-.838.062l-.072-.062-4.535-4.536-4.533 4.536-.072.062c-.252.187-.61.166-.838-.062-.251-.251-.251-.659 0-.91l4.533-4.536-4.533-4.534c-.251-.251-.251-.659 0-.91.228-.229.586-.25.838-.062l.072.062 4.533 4.534 4.535-4.534z" transform="translate(-335 -110) translate(335 110) translate(5.143 5.143)"/>
                </g>
            </g>
        </g>
    </g>
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
        <div className={styles.label}>{props.title}</div>
        <Button style={{marginLeft: 'auto'}} onClick={props.onClose}>
          <ArrowSvg />
        </Button>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>,
    el,
  );
}

export default Modal;
