import './App.css';
import Title from './component/Title';
import Component from './component/Component';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {

  const [theme,setTheme] = useState("light");

  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div>
            <Title/>
            <Component/>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
