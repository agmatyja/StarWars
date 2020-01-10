import React from 'react';
import style from './Search.css';
class Search extends React.Component {
	render() {
        return (
            <h1>{this.props.Search}</h1>
             
        );
    }
};

export default Search;