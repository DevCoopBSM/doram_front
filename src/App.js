import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './common/globalstyle';
import Main from './components/Main/index';
import User from './components/UserInfo/index';
import Save from './components/SaveList/index';
import Write from './components/Write/index';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/save" element={<Save />} />
          <Route path="/write" element={<Write />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
