import React from 'react';
import './App.css';

//Components
import Main from './screens/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
}

export default App;
