import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';

import About from './functionBased/pages/About';
import NoMatch from './functionBased/pages/NoMatch';
import './App.css';

import Navbar from './functionBased/components/Navbar';
// eslint-disable-next-line react/prefer-stateless-function
const App = () => (

  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<TodoContainer />} />
      <Route path="/about*" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>

);

export default App;
