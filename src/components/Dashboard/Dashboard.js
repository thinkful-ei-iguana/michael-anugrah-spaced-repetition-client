import React from 'react';
import UserContext from '../../contexts/UserContext'


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  static contextType = UserContext

  render(){
    console.log(this.context);
    return(
      <div>
        <div><span>{this.context.user.name}</span></div>
      </div>
    )
  }
}

export default Dashboard;