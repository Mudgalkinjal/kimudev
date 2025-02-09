import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import IntroductionSection from './components/IntroductionSection'
import ExpertiseSection from './components/ExpertiseSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import ScrollController from './components/ScrollController'
import SentimentPage from './pages/SentimentPage'
import MachineLearning from './pages/MachineLearning'
import EmploymentOne from './components/Employment_one'
import EmploymentTwo from './components/Employment_two'
import EmploymentThree from './components/Employment_three'
import ProjectList from './pages/ProjectList'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <ScrollController />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/machinelearning" element={<MachineLearning />} />
        <Route path="/sentimentpage" element={<SentimentPage />} />
        <Route path="/projectlist" element={<ProjectList />} />
      </Routes>
    </Router>
  )
}

const MainPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section id="header" className="h-screen">
        <Header />
      </section>
      <section id="intro" className="h-screen">
        <IntroductionSection />
      </section>
      <section id="expert" className="h-screen">
        <ExpertiseSection />
      </section>
      <section id="frontend-experience" className="h-screen">
        <EmploymentOne />
      </section>
      <section id="backend-experience" className="h-screen">
        <EmploymentTwo />
      </section>
      <section id="project-experience" className="h-screen">
        <EmploymentThree />
      </section>
      <section id="work" className="h-screen">
        <WorkSection />
      </section>
      <section id="contact" className="h-screen">
        <ContactSection />
      </section>
    </div>
  )
}

export default App
