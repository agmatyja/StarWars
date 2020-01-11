import React from 'react';
import Person from '../components/Person.js';

class PeopleList extends React.Component {
	render() {
        return (
            <div className="row">
            	{this.props.people.map((elem, i) => (
					<Person person={elem} i={i} key={i} />
				))}
			</div>
			
        );
    }
};

export default PeopleList;