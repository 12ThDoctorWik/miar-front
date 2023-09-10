import { useState } from 'react';

export const useDialog = () => {
  const [state, setState] = useState({
    open: false,
    onConfirm: () => {},
  });

  return {
    open(props) {
      setState(prevState => ({
        ...prevState,
        props,
        open: true,
      }));
    },
    close() {
      setState(prevState => ({
        ...prevState,
        open: false,
      }));
    },
    internalState: state,
  };
};

export const bindDialogState = state => ({
  open: state.internalState.open,
  props: state.internalState.props,
  onClose: result => {
    if (state.internalState.onClose && result) {
      state.internalState.onClose(result);
    }

    state.close();
  },
});
