import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "./reducks/store/store";
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from "history";
import {ConnectedRouter} from "connected-react-router";

const history = createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <App/>
      </ConnectedRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);