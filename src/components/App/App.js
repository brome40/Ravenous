import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/Yelp';

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    // console.log('Term: ', term);
    // console.log('Location: ', location);
    // console.log('Sort By: ', sortBy);
    try {
      const response = await Yelp.search(term, location, sortBy);
      setBusinesses(response);
    } catch (error) {
      console.error('Error during Yelp serach:', error);
    }
  };

  return (
    <div className='App'>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
