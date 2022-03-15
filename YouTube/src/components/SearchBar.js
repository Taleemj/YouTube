import React from 'react';
import img from '../logo/logo.png'

class SearchBar extends React.Component {
    State = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
    }
    render() {
        return (
            <div className='header'>
                <div> <img src={img} alt='logo'/> </div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder="Search..." onChange={this.handleChange} />
                </form>
                <div className='icon'></div>
            </div>
        )
    }
}

export default SearchBar
