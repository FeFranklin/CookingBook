import React from 'react';
import handlers from '../utils/handlers';

const Home = () => {
  handlers.get()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  return (
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to THE cooking book
        </h1>
      </main>
    </div>
  )
}

export default Home;