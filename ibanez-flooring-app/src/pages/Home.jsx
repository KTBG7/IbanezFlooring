import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
      <main>
        <div className='introduction'>
        <h1>Welcome!</h1>
        <p>
          Ibanez Flooring is a family owned flooring company in the DFW Area. We place floor in
          your home or office based on your needs! Whether you need Vinyl Flooring with a Water Shield as 
          a pet owner or carpet for your Office, we are here for you! Scroll down to see our different types
          of floors.
        </p>
        </div>
        <div className='vinyl'>
            <div className='text'>
              <h3>Ibanez Flooring has all types of floors! Why don't you look around?</h3>
            </div>
            <img src={require('../pictures/vinylFlooring.jpg')} alt="Vinyl Flooring in multiple colors"/>
        </div>
    </main>
  )
}

export default Home
