import React from 'react'
import SearchBarStyle from './SearchBarStyle.css';

class SearchBar extends React.Component
{
   state ={term:''};

   onFormSubmit =(e)=>{
       e.preventDefault();  // form will not submit automatically on Enter.
       this.props.onSubmiT(this.state.term);
       //console.log(this.state.term)
    }

    // onInputClick(){
    //     console.log("CLICKED!!!")
    // }   

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field ui">
                <label className="label-search Image Search" align="center"><h2 className="text">Image Search</h2></label>    
                <div className="ui inverted left icon input">
                <input type="text" 
                placeholder="search..." 
                value={this.state.term}
                onChange={(e)=> this.setState({term:e.target.value})}>
                </input>
                <i class="search icon"></i>
                <button class="ui purple button">Search</button>
                </div>
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;
/* <div class="ui action input">
  <input type="text" placeholder="Search...">
  <button class="ui button">Search</button>
</div> 
when search
<button class="ui primary loading button">Search</button>
*/

/* <div class="ui disabled icon input">
  <i class="search icon"></i>
  <input type="text" placeholder="Search...">
</div> */