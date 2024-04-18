import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StreamerList from './components/StreamerList';
import SettingsPage from './components/SettingsPage';
import './Styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/" element={<StreamerList />} />
            // ... other routes
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
