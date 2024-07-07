import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Component/theme/ThemeContext';
import ThemeToggler from './Component/theme//ThemeToggler';
import Header from './Component/Header'; // Adjust the path according to your file structure
import Home from './Component/Home/Home'; // Adjust the path according to your file structure


function App() {
  return (
    <ThemeProvider>
    <Router>
      <Header />
      <ThemeToggler />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
