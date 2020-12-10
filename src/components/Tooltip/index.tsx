import React, { CSSProperties } from 'react';
import Card from '../Card';
import Flex from '../Flex';
import Text from '../Text';

interface Props {
  children: String;
  style?: CSSProperties;
}

export default function Tooltip(props: Props) {
  return (
    <Card
      style={
        props.style || {
          padding: 20,
          background: '#e1f3f7',
          border: '1px solid',
          borderColor: '#5ddafc',
        }
      }
    >
      <div>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <span style={{ marginRight: 20 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    <g>
                      <g
                        fill="#329FFF"
                        transform="translate(-24 -270) translate(16 262) translate(8 8)"
                      >
                        <circle cx="12" cy="12" r="12" />
                      </g>
                      <g fill="#FFF">
                        <path
                          d="M6.82 4.245c.518 0 .943.44.977.997l.002.07v6.193c0 .59-.439 1.067-.98 1.067-.52 0-.944-.44-.977-.997l-.003-.07V5.312c0-.59.44-1.067.98-1.067zm.037-3.02c.541 0 .98.438.98.98 0 .54-.439.979-.98.979-.541 0-.98-.439-.98-.98 0-.54.439-.98.98-.98z"
                          transform="translate(-24 -270) translate(16 262) translate(8 8) translate(5.143 5.143)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span>
            <Text size={15}>{props.children}</Text>
          </span>
        </Flex>
      </div>
    </Card>
  );
}
