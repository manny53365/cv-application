// import { useState } from 'react';
// import emptyCv from './components/emptyCv';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';
import CvForm from './components/cvform/CvForm';

import './styles/App.css'

function App() {
  return (
    <div>
      <TitleBar />
      <CvForm />
      <Footer />
    </div>
  )
}

export default App;
