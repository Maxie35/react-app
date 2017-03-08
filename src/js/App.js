import React, { Component } from 'react';
import Projects from './components/Projects';

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		projects: [
  		  {
  		  	title: 'React app',
  		  	category: 'Web Development'
  		  },
  		  {
  		  	title: 'Random project',
  		  	category: 'Randoms'
  		  },
  		  {
  		  	title: 'Ye boi project',
  		  	category: 'Memes'
  		  },
  		]
  	}
  }
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <Projects projects={this.state.projects} />
        
      </div>);
  }
}

export default App;
