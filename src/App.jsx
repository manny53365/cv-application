// import { useState } from 'react'
import PersonalInfo from './pages/personalInfo/PersonalInfo';
import WorkExperience from './pages/experience/WorkExperience';
import Education from './pages/education/Education';
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
