import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// run npm run dev to start the app

/* 
A .tsx file is a typescript (.ts) file that contains JSX (Javascript XML)
It is used in React applications.

XML (Extensible Markup Language) is a markup language that defines a set of rules for
encoding documents in a format that is both human-readable and machine-readable.
It's used for storing and transporting data between a server and a web application,
or between different parts of a web application.
*/

// Use ctrl + space on windows to see suggestions
// Use ctrl + . for quick fixes like above ^
// (such as auto importing App from ./App)

// The starting point of our application
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter> {/*This means the browser will handle the routing for our entire application*/}
        <App /> {/*It is a App.tsx file that we make*/}
    </BrowserRouter>
)