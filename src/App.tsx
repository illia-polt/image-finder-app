import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import { ImagePresenter } from './components/ImagePresenter';
import UserCardModal from './components/UserCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UserForm />} />
        <Route path='/picker' element={<ImagePresenter />} />
        <Route path='/card' element={<UserCardModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
