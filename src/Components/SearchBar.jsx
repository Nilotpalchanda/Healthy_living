import React, { Component } from 'react'

export class searchBar extends Component {
  render() { 
    return (
      <div>
        <form autocomplete="off">
            <div className="autocomplete">
                <input id="myInput" class="form-control" type="text" name="food" onChange={(e)=>this.props.handleChange(e)} placeholder="Food Name" required/>
            </div>
        </form>
      </div>
    )
  }
}

export default searchBar
