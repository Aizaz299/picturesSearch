import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  start={images:[]};
onSearchSubmit(term){
//console.log(term)
axios.get('https://api.unsplash.com/search/photos',
{
  params:{query:term},
headers:{
Authorization:'Client-ID aSYI81rvCekBxkVA9jQ6QKr_qXmPw3x7jeNtvRzO8ME'
}
})
.then(response=>{
  console.log(response)
});
//this.setState({images: response.data.results});
}



  render() {
      return (
      <div
            className="ui container" 
           style={{marginTop:'15px'}}>
           <SearchBar onSubmiT={this.onSearchSubmit}/> 
           
     </div>
  )
  } 

};

export default App;