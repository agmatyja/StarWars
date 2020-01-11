import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.css';
import Title from '../components/Title.js';
import Search from '../components/Search.js';
import PeopleList from './PeopleList.js';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        console.log('reload')
        this.state = {
            data:  []
        };
        setTimeout(() => this.search(""))
    }

    searchHero(event, searchText) {
        event.preventDefault();
        this.search(searchText);
    }

    search(searchText) {
        const url = "https://swapi.co/api/people/?search=" + searchText;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({data: responseJson.results}));
    }
	
   	
    render() { return ( <div className={style.StarWarsApp + " container"}>
        <div className={style.StarWarsAppDiv}> 
        <Title title="Star Wars Heroes"/> 
        <Search search={this.searchHero.bind(this)}/>
        <PeopleList people={this.state.data} />
        </div>     
        </div> ); 
    } 
}

export default hot(module)(App);
