import { Component } from "react";
import './App.css'
import SearchFilter from "./components/SearchFilter/SearchFilter";
import CardList from "./components/CardList/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchNames: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return(
          {monsters: users}
        )
      }))
  }

  onSearchChange = (event) => {
    const searchNames = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return(
        {searchNames}
      )
    })
  }

  render() {
    const filteredSearch = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchNames)
    })

    const { onSearchChange } = this;

    return(
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchFilter 
          SearchFilterOnSearchChange = { onSearchChange } 
          newClassname = { 'search-box' } 
          newPlaceholder = {'Search Names'} 
        />
        <CardList monsters = { filteredSearch } />
      </div>
    )
  }
}

export default App; 