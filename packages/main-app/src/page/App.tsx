import { useState, useEffect } from 'react';
import * as API from '@immutable/api';
import reactLogo from '../assets/react.svg';
import utils from '../utils';
import './App.css';

function App() {
    const [count, setCount] = useState(0)
    console.log('Con', API.getImmutableContext());

    useEffect(() => {
        utils.reportEvent('app_mounted');
    }, [])

    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
