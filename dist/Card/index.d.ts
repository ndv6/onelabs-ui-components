import { ReactNode, CSSProperties } from 'react';
interface Props {
    children: ReactNode;
    onClick?: (event: any) => void;
    selected?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    withArrow?: boolean;
    checked?: boolean;
    onChange?: (arg: boolean) => void;
    type?: 'checkbox' | 'default';
    radio?: boolean;
}
declare function Card(props: Props): JSX.Element;
declare namespace Card {
    var List: (props: {
        list: Props[];
    }) => JSX.Element[];
}
export default Card;
