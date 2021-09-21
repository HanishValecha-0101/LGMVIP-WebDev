
import './App.css';

import React, { Component } from 'react'
import Spinner from './components/Spinner/Spinner';
import Card from './components/Cards/Cards';


class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],
                loading : true                
  }
  

	this.updateState = this.updateState.bind(this)
  this.loading = this.loading.bind(this)
  }
    
  loading(){
    this.setState({loading:true})
  }

  updateState(){
      this.setState({loading:true});
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (
    <>
          <div className="App">
          <nav>
                <ul>
                    <li><a href="/">Fetch Data From API</a></li>
                </ul>

                <button onClick={this.updateState}>Get Users</button>
            
            </nav>
            
            {this.state.loading && <Spinner />}
            <Card loading={this.state.loading} users={this.state.users_data}/>
         </div>
    </>
    )
  }
}

  
  

export default App;
