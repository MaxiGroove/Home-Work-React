import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componetns/app/app';
import { events } from './mocks'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <StrictMode>
        <App events={events} />
    // </StrictMode>
);


// ReactDOM.render(<App />, document.querySelector('#root'))
