import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import TextForm from './components/TextForm';
// import About from './components/About';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  function toggleTheme() {
    setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
  }
  return (
    <div className={`App ${theme}`}>
      <Header title="TextUtils" theme={theme} toggleTheme={toggleTheme} />
      <TextForm />
    </div>
  );
  // return (
  //   <Router>
  //     <div className={`App ${theme}`}>
  //       <Header title="TextUtils" theme={theme} toggleTheme={toggleTheme} />
  //       <Switch>
  //         <Route exact path="/">
  //           <TextForm />
  //         </Route>
  //         <Route exact path="/about">
  //           <About />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}

export default App;
