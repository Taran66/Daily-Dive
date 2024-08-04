import './App.css'
import LandingPage from './section/LandingPage';
import ThirdPage from './section/ThirdPage';
import SecondPage from './section/SecondPage';
import FourthPage from './section/FourthPage';
import FifthPage from './section/FifthPage';
import Sixth from './section/Sixth';

const App = () => 
  (
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
      <section>
        <ThirdPage />
      </section>
      <section>
        <FifthPage />
      </section>
      <section>
        <Sixth />
      </section>
    </main>
  )


  export default App;