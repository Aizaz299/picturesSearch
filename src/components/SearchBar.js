import React from 'react'

class SearchBar extends React.Component
{
    onInputChange(event){
        console.log(event.target.value);

    }

    // onInputClick(){
    //     console.log("CLICKED!!!")
    // }   

    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                <label align="center">Image Search</label>    
                <input type="text" placeholder="search..." onChange={this.onInputChange}></input>
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;
{/* <div class="ui disabled icon input">
  <i class="search icon"></i>
  <input type="text" placeholder="Search...">
</div> */}