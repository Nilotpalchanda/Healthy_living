import React, { Component } from 'react';
import './App.css';
import Header from "./CommonComponent/Header"
import SearchBar from './Components/SearchBar'
import FoodCard from './Components/FoodCard'
import {foodDetails} from './Api'
class App extends Component {
  state={
    foodName:foodDetails,
    items:[]
  }
  componentWillMount(){
    this.setState({items: this.state.foodName})
  }
  handleChange(e){
    let abc = this.state.foodName.filter(function(item){
      return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: abc});
  }
  render() {
      let food = this.state.items.map((data)=>{
        return (
          <div className="col-md-4">
                <FoodCard name={data.name}/>
          </div>
        )
      })

    return (
      
        <React.Fragment>
          <Header/>
        <div className="container-fluid">
        <SearchBar handleChange={this.handleChange.bind(this)}/>
        <div className="row">
         {food}
        </div>
      </div>

      </React.Fragment>
    );
  }
}

export default App;
