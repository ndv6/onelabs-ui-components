import React from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

export function Default() {
  const [state, setstate] = React.useState(false);
  return (
    <div>
      <button onClick={() => setstate(true)}>show default modal</button>
      {state && (
        <Modal onClose={() => setstate(false)}>
          <div style={{ width: 300, padding: 10 }}>
            <h1 style={{ marginBottom: 20 }}>Are you sure you want to leave?</h1>
            <p style={{ marginBottom: 20 }}>
              Leaving verification process will make your account unverified and you will not be
              able to do any banking transaction.
            </p>
            <Button full onClick={() => setstate(false)} variant="primary">
              Close
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
export function Fullscreen() {
  const [state, setstate] = React.useState(false);
  return (
    <div>
      <button onClick={() => setstate(true)}>show modal</button>
      {state && (
        <Modal title="fullscreen modal" type="fullscreen" onClose={() => setstate(false)}>
          <div style={{ padding: 20 }}>
            <h1>Modal</h1>
            <p>content modal</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default {
  title: 'Elements | Modal',
  component: Modal,
};
