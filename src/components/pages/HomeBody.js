// React
import { React } from 'react';

// Components
import IndexArea from './IndexArea';
import Features from './Features';
import ShowDashboard from './ShowDashboard';
import Pricing from './Pricing';

function HomeBody() {
  return (
    <>
      <header className="container">
        <IndexArea />
        <Features />
      </header>
        <ShowDashboard />
        <Pricing />
    </>
  )
}

export default HomeBody;