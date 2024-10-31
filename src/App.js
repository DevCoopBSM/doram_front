import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./common/globalstyle";
import Main from "./components/Main/index";
import User from "./components/UserInfo/index";
import Save from "./components/SaveList/index";
import Write from "./components/Write/index";
import Detail from "./components/Detail/index";
import Modify from "./components/Modify/index";
import SaveWrite from "./components/SaveWrite/index";
import Login from "./components/Login/index";
import Account from "./components/Account/index";
import NotFoundPage from "./pages/NotFoundPage";

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <GlobalStyle />
      <div style={{ display: "flex" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/save" element={<Save />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/savewrite" element={<SaveWrite />} />
          <Route path="/account" element={<Account />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
