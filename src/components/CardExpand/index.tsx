import Flex from '../Flex';
import React, { ReactNode, useState, MouseEventHandler } from 'react';
import styles from './CardExpand.module.css';

const SvgChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <g fill="#EB2629">
        <g>
          <g>
            <path
              d="M19.921 6.771c.434-.447 1.147-.458 1.594-.024.406.394.452 1.02.131 1.466l-.107.128-8.73 9.013c-.406.419-1.055.453-1.502.104l-.116-.104-8.73-9.013c-.434-.447-.422-1.16.024-1.594.406-.394 1.033-.421 1.469-.087l.125.111L12 14.951l7.921-8.18z"
              transform="translate(-319 -567) translate(0 543) translate(319 24) rotate(180 12 12.062)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

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

function CardExpand({
  active,
  closeIcon,
  onClose,
  expand,
  variant = 'default',
  children,
}: CardExpandProps) {
  const [isExpand, setIsExpand] = useState(expand || expand === undefined ? false : true);

  return (
    <div
      data-testid="wrapper-cardExpand"
      className={
        active
          ? variant === 'success'
            ? styles.mainCardActiveSuccess
            : styles.mainCardActive
          : styles.mainCard
      }
    >
      <div data-testid="card" className={isExpand ? styles.cardExpanded : styles.card}>
        <div>
          {!closeIcon && closeIcon !== undefined ? (
            <div className="textCollapse">{children.title}</div>
          ) : (
            <Flex justifyContent="space-between" alignItems="flex-start">
              <div className="textCollapse">{children.title}</div>
              <div
                className={typeof closeIcon !== 'boolean' ? styles.closeIcon : styles.chevron}
                onClick={expand || expand === undefined ? () => setIsExpand(!isExpand) : onClose}
              >
                {typeof closeIcon === 'boolean' || closeIcon === undefined ? (
                  <SvgChevronUp />
                ) : (
                  closeIcon
                )}
              </div>
            </Flex>
          )}
        </div>
        <div className={styles.textContent}>{children.content}</div>
      </div>
      <div className={styles.action} style={{ marginTop: 24 }}>
        {children.action}
      </div>
    </div>
  );
}
export default CardExpand;
