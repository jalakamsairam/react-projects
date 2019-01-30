import React, { Component } from 'react';

//import always happens from the react with small r


import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
     persons:[
       {name:'max',age:'28'},
       {name:'manu',age:'29'},
       {name:'stephanie',age:'26'}
      ] 
  }
  //manipulate the state on click
  switchNameHandler = (newName) =>{
    //console.log("was clicked")
     this.setState({
       persons:[
         {name:newName,age:'28'},
         {name:'sairam',age:'25'},
         {name:'stephanie',age:'28'}
       ]
   })
  }
  
  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name:'max',age:'28'},
        {name:event.target.value,age:'29'},
        {name:'stephanie',age:'26'}
      ]
    })
  }
   
  render() {
    return (
      <div className="App">
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       
       
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler.bind(this)}
        /> 
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={this.switchNameHandler.bind(this,'sairam')}
        />
        <button onClick = {this.switchNameHandler.bind(this,'sai')}>Switch Name</button>
      </div>
    );
  }
}

export default App;
