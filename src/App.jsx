import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChiSiamo from './pages/ChiSiamo';
import PostList from './pages/PostList';
import DefaulLayout from './Componens/DefaultLayout';
import PostDetail from './Componens/PostDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaulLayout}>
          <Route index Component={HomePage} />
          <Route path='/info' Component={ChiSiamo} />
          <Route path='/posts'>
            <Route index Component={PostList} />
            <Route path=':id' Component={PostDetail} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
