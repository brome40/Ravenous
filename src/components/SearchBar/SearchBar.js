import React from "react";
import './SearchBar.css';

//Search Bar will use Yelp API


//'SearchBar' component class
class SearchBar extends React.Component {
  //Contructor:
  constructor(props) {
    super(props);
    //initial state
    this.state = { 
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    //bind event handlers to 'SearchBar'
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    //sort by options
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }
  }
  //getSortByClass Method:
  //used to change className of selected option
  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : ''; 
  } 

  //handleSortByChange Method:
  //event handler for selected sort type
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  //handleTermChange Method:
  //event handler for business search query
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  //handleLocationChange Method:
  //event handler for location search query
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  //handleSearch Method:
  //event handler for submit button
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  //renderSortByOptions Method:
  //dynamically create list items to display sort options
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      //return list item for each sort option
      return (
        <li key={sortByOptionValue} 
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)} >
          {sortByOption}
        </li>
      );
    });
  }
  //Render Method:
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch} >
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}
//make 'SearchBar' component available to rest of Ravenous
export default SearchBar;