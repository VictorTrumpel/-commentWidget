import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import { store } from "./CreateStore";
import CommentSection from "./containers/CommentSection";
import './GeneralStyles.css';


ReactDom.render(
    <Provider store={store}>
        <CommentSection />
    </Provider>,
    document.querySelector('#app')
);