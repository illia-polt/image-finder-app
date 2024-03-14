import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import { ImagePresenter } from './components/ImagePresenter';
import UserCardModal from './components/UserCardModal';

function App() {
  return (
    <div className="App">
      <UserForm/>
      <ImagePresenter />
      <UserCardModal/>
    </div>
  );
}

export default App;
