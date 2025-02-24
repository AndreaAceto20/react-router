import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChiSiamo from './pages/ChiSiamo';
import PostList from './pages/PostList';
import DefaulLayout from './Componens/DefaultLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaulLayout}>
          <Route path="/" Component={HomePage} />
          <Route path='/info' Component={ChiSiamo} />
          <Route path='/posts' Component={PostList} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
