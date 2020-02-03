import React from 'react';
import UserContext from '../../contexts/UserContext'
import './Dashboard.css'


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  static contextType = UserContext

  render(){
    return(
      <div className="dashboardContainer">
        <h3>Welcome back, {this.context.user.name}!</h3>
        <button>Practice Now!</button>
        <div className="infoArea">
          <div className="infoHeader">Words to practice:</div>
          <div className="wordsHolder">
            <div className="words">Words Here</div>
            <div className="counts">Correct / Incorrect Count</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;