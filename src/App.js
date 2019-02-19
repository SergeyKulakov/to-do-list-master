import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
    value: ['walk the dog', 'tell Alex many happy returns of the days.', 'feed the cat', 'it is necessary to do some exercise every day', 'buy bread', 'clean the computer', 'take out the trash' ],
    selected: {},
    textvalue : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
}

  handleChange(e) {
    this.setState({
      textvalue:e.target.value
    })
  }

  addTodoItem() {
    for(var i = 0; i < this.state.value.length; i++){
      if(this.state.value[i] === this.state.textvalue){
        console.log('Same value');
        delete this.state.value[i];
      }
    }
    this.state.value.unshift(this.state.textvalue);

    this.setState(
      this.state
    )
    this.state.textvalue = "";
  }

  deleteTodoItem(v){
    for(var i = 0; i < this.state.value.length; i++){
      if(this.state.value[i] === v){
         delete this.state.value[i]
      }
    }
    this.setState({
      value:this.state.value
    })
  }

  selectItem(v){
    var selected = this.state.selected;
    selected[v] = !selected[v];
    this.setState({selected: selected});
  }

  renderItem(v){
    var className = this.state.selected[v] ? 'active' : 'inactive';
    var click = this.selectItem.bind(this, v);
    return(
      <li key={v} className={className}>
      <label className="container">
      <input type="checkbox" onClick={click}/><div className="checkbox-value">{v}</div>
      <span className="checkmark"></span>
      </label><button className="del-btn" onClick={this.deleteTodoItem.bind(this, v)}><i className='fas fa-trash-alt'></i></button>
      </li>)
  }

  render() {
    let { value } = this.state;
    return (
      <div className="App">
        <div className="App-content">
          <input className="text" type="text" placeholder="add a new task..." value={this.state.textvalue} onChange={ this.handleChange } />
          <button className="add-btn" onClick={this.addTodoItem} disabled={!this.state.textvalue}>Add</button>
          <ul>
          { this.state.value.map(this.renderItem) }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;