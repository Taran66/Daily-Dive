import './App.css'
import LandingPage from './section/LandingPage';
import ThirdPage from './section/ThirdPage';
import SecondPage from './section/SecondPage';

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
        <ThirdPage />
      </section>
    </main>
  )


  export default App;