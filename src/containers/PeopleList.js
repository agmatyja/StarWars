import React from 'react';
import style from './PeopleList.css';

class PeopleList extends React.Component {
	render() {
        return (
            <div>{this.props.people.map((elem, i) => (
				<div className={style.People} key={i}> </div>
			))} </div>
			
        );
    }
};

export default PeopleList;