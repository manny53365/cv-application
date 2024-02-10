// import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';

import './styles/App.css'

function App() {

  return (
    <form>
      <TitleBar />
      <PersonalInfo />
      <WorkExperience />
      <Education />
      <Footer />
    </form>
  )
}

export default App;
