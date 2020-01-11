import React from 'react';
import style from './Search.css';

class Search extends React.Component {
	render() {
        return (
           	<form className={style["search-form"] + " col-12 row"} onSubmit={(event) => this.props.search(event, document.getElementById('search-box').value)}>
           		<input className={style["search-box"] + " col-10"} id="search-box" placeholder="search text"/>
           		<button className={style["search-button"] + " col-2"} type="submit">Search</button>
           	</form>
        );
    }
};

export default Search;