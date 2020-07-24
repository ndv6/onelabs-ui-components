import React, { ReactNode } from 'react';
import { ReactComponent as CheckedIcon } from './checked.svg';
import { ReactComponent as DisabledCheckedIcon } from './disabledChecked.svg';
import { ReactComponent as UnCheckedIcon } from './unChecked.svg';
import styles from './Checkbox.module.css';

interface Props {
  children: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (args: boolean) => void;
}

function Checkbox(props: Props) {
  const { children, disabled, checked, onChange } = props;
  const [htmlChecked, setHtmlChecked] = React.useState(false);
  function onChangeInput() {
    if (onChange) {
      onChange(!checked);
      return;
    }
    setHtmlChecked(prev => !prev);
  }
  React.useEffect(() => {
    setHtmlChecked(checked || false);
  }, [checked]);

  let iconChecked = <CheckedIcon height={20} width={20} />;
  let iconUnChecked = <UnCheckedIcon height={20} width={20} />;

  if (disabled) {
    iconChecked = <DisabledCheckedIcon height={20} width={20} />;
  }

  return (
    <div className={[styles.checkbox, disabled ? styles.disabled : ''].join(' ')}>
      <input
        className={styles.input}
        checked={htmlChecked}
        onChange={onChangeInput}
        type="checkbox"
      />
      {htmlChecked ? iconChecked : iconUnChecked}

      <span className={styles.label}>{children}</span>
    </div>
  );
}
export default Checkbox;
