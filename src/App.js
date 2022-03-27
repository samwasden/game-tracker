import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Turn from './components/Turn';
import { darktheme, lighttheme } from './tools/Theme';
import './App.css';
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function App() {

  const [team, setteam] = useState('light')

  return (
    <div className="app">
      <ThemeProvider theme={team === 'light' ? lighttheme : darktheme}>
        <Router>
          <Routes>
            <Route path='/' element={ <Turn /> } />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
