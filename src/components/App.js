import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  state={images:[]};
onSearchSubmit = async(term)=>{
//console.log(term)
const response=await axios.get('https://api.unsplash.com/search/photos',
{
  params:{query:term},
headers:{
Authorization:'Client-ID aSYI81rvCekBxkVA9jQ6QKr_qXmPw3x7jeNtvRzO8ME'
}
})
//console.log(this)
//console.log(response.data.results);
this.setState({images: response.data.results});
}



  render() {
      return (
      <div
            className="ui container" 
           style={{marginTop:'15px'}}>
           <SearchBar onSubmiT={this.onSearchSubmit} guessWhat="I am the props OBJ"/> 
           Found: {this.state.images.length} images
     </div>
  )
  } 

};

export default App;