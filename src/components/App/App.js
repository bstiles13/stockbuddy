import React, { useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Trending } from '../Trending/Trending';
import { Watchlist } from '../Watchlist/Watchlist';

import '../../styles/themes.scss';
import './App.scss';

const App = () => {
  useEffect(() => { // mount
    document.body.classList.add('dark');
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <Trending />
      <Watchlist />
    </div>
  );
};

export default App;
