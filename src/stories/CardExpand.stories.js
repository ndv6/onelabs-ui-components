import React from 'react';
import CardExpand from '../components/CardExpand';
import Button from '../components/Button';
import Text from '../components/Text';

export const Default = () => {
  const [state, setstate] = React.useState(false);
  return (
    <div>
      <button onClick={() => setstate(true)}>show card</button>
      <CardExpand active={state}>
        {{
          title: <Text.Title>Lorem Ipsum</Text.Title>,
          content: (
            <>
              Excepteur laborum eu dolore commodo. Ea minim nostrud excepteur duis fugiat cillum
              exercitation ex occaecat nisi. Non ea duis deserunt adipisicing sit labore laboris id
              ex sunt sint aliquip incididunt. Aliqua sint irure in proident laborum cillum magna
              cupidatat. Velit labore officia consequat sint consequat sit sunt ullamco
              reprehenderit aliqua reprehenderit tempor veniam sint. Veniam velit dolore in qui ea
              et commodo ut elit nisi. Ex tempor cillum et eu sit ullamco.
            </>
          ),
          action: (
            <Button variant="primary" full>
              Button
            </Button>
          ),
        }}
      </CardExpand>
    </div>
  );
};

export const WithoutArrow = () => {
  const [state, setstate] = React.useState(false);
  return (
    <div>
      <button onClick={() => setstate(true)}>show card</button>
      <CardExpand active={state} closeIcon={false}>
        {{
          title: (
            <>
              <Text.Title>Lorem Ipsum</Text.Title>
              Excepteur laborum eu dolore commodo. Ea minim nostrud excepteur duis fugiat cillum
              exercitation ex occaecat nisi. Non ea duis deserunt adipisicing sit labore laboris id
              ex sunt sint aliquip incididunt. Aliqua sint irure in proident laborum cillum magna
              cupidatat. Velit labore officia consequat sint consequat sit sunt ullamco
              reprehenderit aliqua reprehenderit tempor veniam sint. Veniam velit dolore in qui ea
              et commodo ut elit nisi. Ex tempor cillum et eu sit ullamco.
            </>
          ),
          action: (
            <Button variant="primary" full>
              Button
            </Button>
          ),
        }}
      </CardExpand>
    </div>
  );
};

export const WithoutExpand = () => {
  const [state, setstate] = React.useState(false);
  return (
    <div>
      <button onClick={() => setstate(true)}>show card</button>
      <CardExpand active={state} expand={false} onClose={() => setstate(false)}>
        {{
          title: <Text.Title>Lorem Ipsum</Text.Title>,
          content: (
            <>
              Excepteur laborum eu dolore commodo. Ea minim nostrud excepteur duis fugiat cillum
              exercitation ex occaecat nisi. Non ea duis deserunt adipisicing sit labore laboris id
              ex sunt sint aliquip incididunt. Aliqua sint irure in proident laborum cillum magna
              cupidatat. Velit labore officia consequat sint consequat sit sunt ullamco
              reprehenderit aliqua reprehenderit tempor veniam sint. Veniam velit dolore in qui ea
              et commodo ut elit nisi. Ex tempor cillum et eu sit ullamco.
            </>
          ),
          action: (
            <Button variant="primary" full>
              Button
            </Button>
          ),
        }}
      </CardExpand>
    </div>
  );
};

export default {
  title: 'Elements | CardExpand',
  component: CardExpand,
};
