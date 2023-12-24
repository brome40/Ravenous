import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';



class App extends React.Component {
  //Constructor:
  constructor(props) {
    super(props);
    //initial array of businesses is empty
    this.state = { businesses: [] };
    //bind searchYelp method to reference 'App'
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  //searchYelp Method:
  //send information to Yelp API
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      //array results from 'Yelp.search' become state of 'App' 
      this.setState({ businesses: businesses }); 
    });
  }
  
  //Render Method:
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
//make 'App' available to rest of Ravenous
export default App;
