// React
import { React } from 'react';

// Components
import IndexArea from './IndexArea';
import Features from './Features';
import ShowDashboard from './ShowDashboard';
import Pricing from './Pricing';

function Home() {
  return (
    <>
      <header className="container">
        <IndexArea />
        <div className="mt-5 mb-5"></div>
        <Features />
      </header>
        <ShowDashboard />
        <Pricing />
    </>
  )
}

export default Home;