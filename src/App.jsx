import './App.css'
import LandingPage from './section/LandingPage';
import ThirdPage from './section/ThirdPage';
import SecondPage from './section/SecondPage';
import FourthPage from './section/FourthPage';
import FifthPage from './section/FifthPage';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './section/BlogPost';
import { useEffect, useState } from 'react';

const App = () => {
  return(
        
    <main>
    <section>
      <LandingPage />
    </section>
    <section>
      <SecondPage />
    </section>
    <section>
      <FourthPage />
    </section>
    {/* <section>
      <ThirdPage />
    </section> */}
    <section>
      <FifthPage />
    </section>
  </main>
  )
}


  export default App;