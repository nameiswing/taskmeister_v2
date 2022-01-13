import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './ReactApp.jsx';
import { Provider } from "react-redux";
import { store } from "./state-manager/store";
import './styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

