import React, { Component } from 'react'


/*
  const thresholdDistance = 2000;  // assume 2km
  const userLocation = [2, 3];
  const cabLocation = [15, 2];

  const [x1, y1] = userLocation;
  const [x2, y2] = cabLocation;
  
  const coor = {
    x: Number(x2-x1),
    y: Number(y2-y1)
  };

  const squreOf = {
    x: coor.x * coor.x,
    y: coor.y * coor.y,
  };

  const sumOfXY = squreOf.x + squreOf.y;
  const distanceBetweenUserAndCab = Math.sqrt(sumOfXY);

*/

export class Rider extends Component {
    constructor(props) {
      super(props)

      const { username, location } = props;
      this.thresholdRef = React.createRef(); 

      const cabList = [
            [82,165],
            [10, 45],
            [45, 78],
            [35, 462],
            [98, 383],
        ];
    
      this.state = {
        username,
        location,
        threshold: 0
      }
    }

    onClickFindCab() {
        console.log('Hai');
    }

    onClickFindCab() {
        // ToDO
    }

  render() {
    const { username, location, threshold } = this.state;
    const [x, y] = location;

    return (
      <div>
        <div>Name: {username}</div>
        <div>Location {`(${x}, ${y})`}</div>
        <div>Threshold {threshold}</div>
        <div><label>Enter Threshold</label><input type='text' value={threshold} onChange={(event) => this.setState({threshold: event.target.value})} /></div>
        <div><button onClick={this.onClickFindCab.bind(this)}>Find cab</button></div>
      </div>
    )
  }
}

export default Rider