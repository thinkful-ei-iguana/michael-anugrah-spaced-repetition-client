import React from 'react';
import './Dashboard.css';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  // {this.state.language}
  // {this.state.words.map((word) => {
  //   return(
  //     <li key={word.id}>
  //       {word.original}
  //     </li>
  //   )
  // })}

  render(){
    console.log('user context: ', this.props.user);
    console.log('content context: ', this.props.content);
    return(
      <div className="dashboardContainer">
        <h3>Welcome back, {this.props.user.user.name}!</h3>
        <button>Practice Now!</button>
        <div className="infoArea">
          <div className="infoHeader">Words to practice in : </div>
          <div className="wordsHolder">
            <div className="words">Words:
            <ul>
            
            </ul>
            
            </div>
            <div className="counts">Correct / Incorrect Count</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;