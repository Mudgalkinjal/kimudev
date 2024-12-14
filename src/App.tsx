import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'
import CustomCursor from './components/CustomCursor'
import ProfileSection from './components/ProfileSection'
import ScrollController from './components/ScrollController'

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollController />
      <CustomCursor />
      <Navigation />
      <Header />
      <AboutSection />
      <ProfileSection />
      <WorkSection />
      <ContactSection />
    </div>
  )
}

export default App
