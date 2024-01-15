import './App.css';
import axios  from 'axios';
import  CardList  from "./components/card-list/card-list.js";
import SearchBox from "./components/search/search-box.js"
import { useState } from 'react';
import { useEffect } from 'react';


const App = () =>{
  const [searchField , setSearchField] = useState('');
  const [monsters , setMonsters] = useState([]);
  const [filteredMonsters , setFilteredMonsters] = useState([monsters]);
  const onSearchChange =(event) =>{
    const searchString = event.target.value.toLowerCase();
      setSearchField(searchString);
      
  }

  useEffect( () =>{
  const newfilteredMonsters = monsters.filter(monster =>{
   return monster.name.toLowerCase().includes(searchField);
  });
  setFilteredMonsters(newfilteredMonsters);
  }
  ,[monsters,searchField]);

    const fetchingData = async () =>{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setMonsters(response.data);
    }
  useEffect( () =>{
    fetchingData();
  }
    
   ,[]);
  
return (
  <div className="App">
  <h1 className="title">Monsters Rodelex</h1>

  <SearchBox 
      onChangeHandler = {onSearchChange} 
      placeholder="Search monster" 
      className="monsters-search-box"/>
     <CardList monsters={filteredMonsters}/>
  </div>
);
}
export default App;
