import React from 'react'
import ReactDOM from 'react-dom'
import { Child } from './Child'

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: 'Pedro'}
  }
  render(){
    return <div><Child name={this.state.name}/></div>
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'))