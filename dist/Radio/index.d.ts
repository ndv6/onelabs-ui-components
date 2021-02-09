import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (args: boolean) => void;
    size?: 'default' | 'small' | 'large';
}
declare function RadioButton(props: Props): JSX.Element;
export default RadioButton;
