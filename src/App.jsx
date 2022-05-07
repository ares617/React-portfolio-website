import React from 'react'
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';

const App = () => {
  return (
      <>
        <div className='ripple-background'>
          <div className='circle xlarge shade2'></div>
          <div className='circle large shade3'></div>
          <div className='circle medium shade4'></div>
          <div className='circle small shade5'></div>
        </div>
        <Home />
        <Nav />
      </>
  )
}

export default App
