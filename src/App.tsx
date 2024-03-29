import React from 'react';
import Theme from './Theme';
import { useState } from "react";

//Components
import Main from './screens/Main/Main';
import { BrowserRouter } from 'react-router-dom';

interface IApp { }

const App: React.FC<IApp> = () => {
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
