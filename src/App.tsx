import React from 'react';
import Theme from './Theme';
import { useState } from "react";
import './App.css';

//Components
import Main from './screens/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
    const [themeType, setThemeType] = useState('DEFAULT');
    return (
      <BrowserRouter>
        <Theme themeType={themeType}>
          <Main setThemeType={setThemeType} />
        </Theme>
      </BrowserRouter>
    );
}

export default App;
