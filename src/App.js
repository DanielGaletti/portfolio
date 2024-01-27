import './App.css';
import { useState } from 'react';
import HamburguerMenu from './components/Header';
import AppRoutes from './Routes/routes.js';
function App() {
  const [darkTheme, setIsDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? 'dark-mode' : 'light-mode'}>

      <label className='switch'>
        <input type="checkbox" onClick={() => setIsDarkTheme(!darkTheme)} />
        <span className={darkTheme ? 'slider dark-mode-slider' : 'slider light-mode-slider'}></span>
      </label>
      
      <HamburguerMenu mode={darkTheme}/>
      <AppRoutes />
    </div>
  );
}

export default App;
