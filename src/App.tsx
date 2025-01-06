import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'
import ProfileSection from './components/ProfileSection'
import ScrollController from './components/ScrollController'
import SentimentPage from './pages/SentimentPage' // New page for the model
import MachineLearning from './pages/MachineLearning'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import './App.css'
import ProjectList from './pages/ProjectList'
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
      <Navigation />
      <section id="header" className="h-screen">
        <Header />
      </section>
      <section id="about" className="h-screen">
        <AboutSection />
      </section>
      <section id="profile" className="h-screen">
        <ProfileSection />
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
