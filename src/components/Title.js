import React from 'react';
import style from './Title.css';
class Title extends React.Component {
	render() {
        return (
            <h1 className="title">{this.props.title}</h1>    
        );
    }
};

export default Title;
