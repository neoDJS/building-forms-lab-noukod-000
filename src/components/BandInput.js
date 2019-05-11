// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}

export default connect(null, { addBands })(BandInput);
