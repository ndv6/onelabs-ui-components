import React from 'react';
import Card from '../Card';
import Flex from '../Flex';
import Text from '../Text';
export default function Tooltip(props) {
    return (React.createElement(Card, { style: props.style || {
            padding: 20,
            background: '#e1f3f7',
            border: '1px solid',
            borderColor: '#5ddafc',
            boxShadow: 'none'
        } },
        React.createElement("div", null,
            React.createElement(Flex, { justifyContent: "space-between", alignItems: "flex-start" },
                React.createElement("span", { style: { marginRight: 20 } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
                            React.createElement("g", null,
                                React.createElement("g", null,
                                    React.createElement("g", null,
                                        React.createElement("g", { fill: "#329FFF", transform: "translate(-24 -270) translate(16 262) translate(8 8)" },
                                            React.createElement("circle", { cx: "12", cy: "12", r: "12" })),
                                        React.createElement("g", { fill: "#FFF" },
                                            React.createElement("path", { d: "M6.82 4.245c.518 0 .943.44.977.997l.002.07v6.193c0 .59-.439 1.067-.98 1.067-.52 0-.944-.44-.977-.997l-.003-.07V5.312c0-.59.44-1.067.98-1.067zm.037-3.02c.541 0 .98.438.98.98 0 .54-.439.979-.98.979-.541 0-.98-.439-.98-.98 0-.54.439-.98.98-.98z", transform: "translate(-24 -270) translate(16 262) translate(8 8) translate(5.143 5.143)" })))))))),
                React.createElement("span", null,
                    React.createElement(Text, { size: 15 }, props.children))))));
}
//# sourceMappingURL=index.js.map