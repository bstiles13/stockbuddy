import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Trending } from '../Trending/Trending';
import { Watchlist } from '../Watchlist/Watchlist';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Trending />
      <Watchlist />
    </div>
  );
};

export default App;
