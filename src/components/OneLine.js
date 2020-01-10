import React from 'react';
// import style from './Person.css';
class OneLine extends React.Component {
	render() {
        return (
				<div className="row">
                    <div className="col-4">{this.props.label}</div>
                    <div className="col-8">{this.props.value}</div>
            	</div>   
            );
        }
    };


export default OneLine;