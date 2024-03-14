import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import { ImageFinderProvider } from './components/ImageFinderContext/ImageFinderContext';
import { ImagePresenter } from './components/ImagePresenter';

function App() {
  return (
    <ImageFinderProvider>
      <div className="App">
        <UserForm/>
        <ImagePresenter />
      </div>
    </ImageFinderProvider>

  );
}

export default App;
