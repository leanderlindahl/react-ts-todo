import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../Reducer';
import { ConnectedTasksList } from '../components/TasksList';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <ConnectedTasksList></ConnectedTasksList>
  </Provider>
);
