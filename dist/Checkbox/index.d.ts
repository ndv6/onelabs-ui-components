import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (args: boolean) => void;
    size?: 'default' | 'small';
    radio?: boolean;
}
declare function Checkbox(props: Props): JSX.Element;
export default Checkbox;
