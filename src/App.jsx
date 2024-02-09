// import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
    <>
      <TitleBar />
      <PersonalInfo />
      <WorkExperience />
      <Education />
      <Footer />
    </>
  )
}

export default App;
