import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import NosValeurs from './components/NosValeurs';
import Services from './components/Services';
import Realisation from './components/Realisation';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <NosValeurs />
      <Services />
      <Realisation />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;