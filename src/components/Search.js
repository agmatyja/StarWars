import React from 'react';
import style from './Search.css';
class Search extends React.Component {
	render() {
		function onSubmit(event) {
			console.log('submit')
		}

        return (
            <form onSubmit={onSubmit}>
            	<div className="row">
            		<input className={style.search + " col-10"} id="search" placeholder="search text"/>
            		<button className="col-2" type="submit">Search</button>
            	</div>
            </form>
        );
    }
};

export default Search;