import { ReactNode, CSSProperties } from 'react';
interface Props {
    children: ReactNode;
    size?: number;
    color?: string;
    bold?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare function Text(props: Props): JSX.Element;
declare namespace Text {
    var Title: (props: Props) => JSX.Element;
}
export default Text;
