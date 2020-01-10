import React from 'react';
import style from './Person.css';
import OneLine from './OneLine.js';

class Person extends React.Component {
	render() {
        return (
            <div className={style.Person + " col-10"} key={this.props.i} data-toggle="collapse" data-target={'#details' + this.props.i}>
				<div className="panel-header">{this.props.person.name}</div>
				<div id={'details' + this.props.i} className="collapse">
					<OneLine label="height" value={this.props.person.height}></OneLine>
					<OneLine label="mass" value={this.props.person.mass}></OneLine>
					<OneLine label="hair color" value={this.props.person.hair_color}></OneLine>
					<OneLine label="skin color" value={this.props.person.skin_color}></OneLine>
					<OneLine label="eye color" value={this.props.eye_color}></OneLine>
					<OneLine label="birth year" value={this.props.person.birth_year}></OneLine>
					<OneLine label="gender" value={this.props.person.gender}></OneLine>
            	</div>
			</div>    
        );
    }
};

export default Person;
 