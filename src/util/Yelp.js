//used for interacting with Yelp API
const apiKey = 'Ktvgg-a_NqZwWuWb7Gtf6I87HwtDSBTT8x6rRtc6hvIwdVo87P2zvlcqqxfPFebZR9Ki_i3FEJaVmsEfsjv3_oMhzUVBhLgyIqQXaBno6DvI3sh0PO39WlCpvqfJYnYx';

const Yelp = {
  //Search Method:
  //returns array of business objects from API based on parameters
  search(term, location, sortBy) {
    //we prepend CORS Anywhere URL to bypass restriction on fetch()
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const path = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    //call to API
    return fetch(corsUrl + path, { 
      headers: { Authorization: `Bearer ${apiKey}` } 
    }).then((response) => { 
      //convert API response to JSON
      return response.json(); 
    }).then((jsonResponse) => {
      //check for valid API response
      if (jsonResponse.businesses) { 
        //iterate through each business
        return jsonResponse.businesses.map((business) => {
          //properties for each business
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            website: business.url
          };
        });
      }
    });
  }
};

//make 'Yelp' available to rest of Ravenous
export default Yelp;
