import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'
import CustomCursor from './components/CustomCursor'
import ProfileSection from './components/ProfileSection'
import ScrollController from './components/ScrollController'
import SentimentPage from './pages/SentimentPage' // New page for the model
import MachineLearning from './pages/MachineLearning'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollController />
      <Navigation />
      <Routes>
        {/* Route for the main one-page scrollable layout */}
        <Route path="/" element={<MainPage />} />
        {/* Route for the Machine Learning page */}
        <Route path="/machinelearning" element={<MachineLearning />} />
        {/* Route for the Machine Learning page */}
        <Route path="/sentimentpage" element={<SentimentPage />} />
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

// const App: React.FC = () => {
//   return (
//     <div>
//       <ScrollController />
//       <CustomCursor />
//       <Navigation />
//       <Router>
//         <div className="bg-black text-white min-h-screen">
//           <Navigation />
//           <Header />
//           <AboutSection />
//           <ProfileSection />
//           <WorkSection />
//           <ContactSection />
//           <SentimentPage />
//         </div>
//       </Router>
//     </div>
//   )
// }

export default App
