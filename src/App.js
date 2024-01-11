import './App.css';
import React from 'react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
