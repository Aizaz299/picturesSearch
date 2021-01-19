import React from 'react'

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
                <div className="field">
                <label align="center">Image Search</label>    
                <input type="text" 
                placeholder="search..." 
                value={this.state.term}
                onChange={(e)=> this.setState({term:e.target.value})}>

                </input>
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;
/* <div class="ui disabled icon input">
  <i class="search icon"></i>
  <input type="text" placeholder="Search...">
</div> */