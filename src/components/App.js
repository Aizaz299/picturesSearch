import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from '../components/ImageList';


class App extends React.Component {

  state={images:[]};
onSearchSubmit = async(term)=>{
//console.log(term)
const response=await unsplash.get('/search/photos',
{
  params:{query:term}
});
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
           <ImageList images={this.state.images}/>
     </div>
  )
  } 

};

export default App;