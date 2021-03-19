import React from "react";

class SearchBar extends React.Component {
    state = { term : ""};

    onInputChange = (event) => {
       // event.preventDefault();
        this.setState({term: event.target.value});
       // console.log(this.state.term);
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        //this from parent component(class App)
        this.props.onTermSubmitPROP(this.state.term);
    };


    render() {
        return ( 
        <div className="search-bar ui segment"> 
            <form 
                  onSubmit={this.onFormSubmit}
                  className="ui form"
                  >
                <div className="field">
                    <label> Video Search</label>
                    <input
                    type="text" placeholder="Search Video"
                    value={this.state.term}
                    onChange={this.onInputChange} >
                    </input>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;