import React,{Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component'
import './App.css';
import { Searchbox } from './search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state= {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
    <div className="App">
      <Searchbox 
        placeholder='search mosters'
        handleChange={e => this.setState({ searchField: e.target.value})}
      />
      <Cardlist monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;
