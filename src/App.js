import './App.css';

import Header from './components/header';
import Hero from './components/hero';
import Products from './components/products';
import Features from './components/features';
import Reviews from './components/reviews';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header/>
      <Hero/>
      <Products/>
      <Features/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default App;
