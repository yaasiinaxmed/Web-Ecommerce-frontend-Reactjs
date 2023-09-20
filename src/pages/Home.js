import React from 'react';
// useFetch hook
import LatestProducts from '../components/LatestProducts.js';
import Hero from '../components/Hero.js';

const Home = () => {
  return (
    <section>
      <Hero/>
      <LatestProducts/>
    </section>
  )
};

export default Home;
