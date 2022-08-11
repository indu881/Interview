import React, { Component } from 'react'
import Driver from '../driver/Driver';
import Rider from '../rider/Rider';

export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //  userType: 'driver'
       userType: 'rider'
    }
  }

  render() {
    const {userType} = this.state;
    return (<div>
      {userType === 'rider' ? <Rider location={[154, 55]} username={'Maran'}></Rider> :  <Driver location={[10, 45]} username={'Arumuam'} />}
    </div>)
  }
}

export default Login