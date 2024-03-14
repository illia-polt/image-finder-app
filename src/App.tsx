import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import { ImagePresenter } from './components/ImagePresenter';
import UserCardModal from './components/UserCardModal';

function App() {
  console.log('app loaded');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UserForm />} />
        <Route path='/picker' element={<ImagePresenter />} />
        <Route path='/card' element={<UserCardModal />} />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={
    //       <ImageFinderProvider>
    //         <UserForm />
    //       </ImageFinderProvider>
    //     } />
    //     <Route path='/picker' element={
    //       <ImageFinderProvider>
    //         <ImagePresenter />
    //       </ImageFinderProvider>
    //     } />
    //     <Route path='/card' element={<UserCard />} />
    //   </Routes>
    // </BrowserRouter>

    // <ImageFinderProvider>
    //   {/* <div className="App">
    //     <UserForm/>
    //     <ImagePresenter />
    //     <UserCard />
    //   </div> */}
    //   <BrowserRouter>
    //     <Routes>
    //       <Route index element={
    //         <ImageFinderProvider>
    //           <UserForm />
    //         </ImageFinderProvider>
    //       } />
    //       <Route path='/picker' element={<ImagePresenter />} />
    //       <Route path='/card' element={<UserCard />} />
    //     </Routes>
    //   </BrowserRouter>
    // </ImageFinderProvider>

  );
}

export default App;
