import React from 'react';
import './App.css'
import './bootstrap.css'
import logo from './image.jpg'



class App extends React.Component {

constructor(props) {
  super(props);
  this.state={
    newItem:"",
    list:[]
  }
}

  addItem(todoValue) {
      if(todoValue!=='') {
        const newItem = {
          id:Date.now(),
          value:todoValue,
          isDone:false
        }
        const list=[...this.state.list];
        list.push(newItem);
        this.setState({
          list:list,
          newItem:""
        })
      }
      console.log(this.state.list);
  }

  updateInput(input) {
    this.setState({
      newItem:input
    })
  } 

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList=list.filter(item=> item.id!==id);
    this.setState({list:updatedList})
  }


  render() {
    return (
        <div className="container">
          <img src={logo} className="img-thumbnail logo" />
          <h1> Todo List...</h1>
          <div className="container">
          <div className="form-group row"> 
          <div className="col-sm-8">
          <input 
          type="text"
          className="form-control"
          placeholder="Enter the task"
          value={this.state.newItem}
          onChange={e=> this.updateInput(e.target.value)}
          />
          </div>
          <div className="col-sm-4">
          <button 
          className="btn btn-success"
          onClick={()=> this.addItem(this.state.newItem)}
          >Add</button>
          </div>
          </div> 
          </div>
          <div className="list">
          <ul>
          {this.state.list.map(item=> {
            return (
              <li>
                <div className="row">
                <div className="col-sm-8">
                {item.value}
                </div>
                <div className="col-sm-4">
                <button 
                className="btn btn-danger"
                onClick={()=>
                  this.deleteItem(item.id)
                }
                > Delete </button>
                </div>
                </div>
                </li>
            )
          })}
          </ul>
          </div>

          </div>
    )
  }
}

export default App