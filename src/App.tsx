import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './pages/UserForm/UserForm';
import ImagePresenter from './pages/ImagePresenter/ImagePresenter';
import UserCard from './pages/UserCard/UserCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UserForm />} />
        <Route path='/picker' element={<ImagePresenter />} />
        <Route path='/card' element={<UserCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
