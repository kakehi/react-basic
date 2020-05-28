import React from 'react';

class SearchBar extends React.Component {

    state = { term: 'default value' };
    
    /*onInputChange(event){
        console.log(event.target.value);

    }*/

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className ="field">
                        <input 
                            type = "text"
                            value = {this.state.term}
                            onChange = {e => this.setState({ term: e.target.value }) }
                         /*onClick={ (e) => console.log(e.target.value) } onChange={ this.onInputChange }*/ />
                    </div>
                </form>
            </div>
        );
    }
    
};

export default SearchBar;