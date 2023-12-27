import React, { useState } from "react";
import './SearchBar.css';

//Search Bar will use Yelp API

const SearchBar = ({ searchYelp }) => {
  const [state, setState] = useState({
    term: '',
    location: '',
    sortBy: 'best_match',
  });

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortByOption) => {
    return state.sortBy === sortByOption ? 'active' : '';
  };

  const handleSortByChange = (sortByOption) => {
    setState({ ...state, sortBy: sortByOption });
  };

  const handleTermChange = (event) => {
    setState({ ...state, term: event.target.value });
  };

  const handleLocationChange = (event) => {
    setState({ ...state, location: event.target.value });
  };

  const handleSearch = (event) => {
    searchYelp(state.term, state.location, state.sortBy);
    event.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          onChange={handleTermChange}
          value={state.term}
        />
        <input
          placeholder="Where?"
          onChange={handleLocationChange}
          value={state.location}
        />
      </div>
      <div className="SearchBar-submit" onClick={handleSearch}>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
