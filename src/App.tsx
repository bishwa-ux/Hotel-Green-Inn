import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';

export default function App() {
  return (
    <div className="bg-cream text-charcoal font-sans antialiased overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Reservation />
    </div>
  );
}
