import React, { Component } from 'react'

export class Driver extends Component {
    constructor(props) {
      super(props)
    
      const {username, location} = props;

      this.state = {
        isAvailable: false,
        location,
        username
      }

      this.onClickToggleAvailability = this.toggleAvailability.bind(this);
    }

    toggleAvailability() {
        this.setState({
            isAvailable: !this.state.isAvailable
        }, () => {
            console.log('isAvailable: ', this.state.isAvailable);
        })
    }

  render() {
    const { username, location, isAvailable} = this.state;
    const [x, y] = location;
    return (
      <div>
        <div >
            <div className={isAvailable ? '' : 'strike-text'}>Name: {username}</div>
            <div className={isAvailable ? '' : 'strike-text'}>Location {`(${x}, ${y})`}</div>
            <span>Turn of availability {isAvailable}</span>
            <button onClick={this.onClickToggleAvailability}>Toggle available</button>
        </div>
      </div>
    )
  }
}

export default Driver