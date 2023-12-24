import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

//'BusinessList' component displays 6 businesses
class BusinessList extends React.Component {
  //Render Method
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => {
          return <Business business={business} key={business.id}/>;
        })}
      </div>
    );
  }
}
//make 'BusinessList' available to rest of Ravenous
export default BusinessList;