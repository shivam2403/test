// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Show from './pages/show/Show';
import Navbar from './pages/components/navbar/Navbar';
import { ExternalUrlProvider } from './context/ExternalUrlContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ExternalUrlProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/show/:showid' element={<Show />} />
          </Routes>
        </ExternalUrlProvider>
      </Router>
    </div>
  );
}

export default App;
