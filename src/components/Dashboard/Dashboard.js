import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      language: '',
      words: ['Placeholder']
    }
  }

  // {this.state.language}
 componentDidMount() {
 }


  render(){
    console.log('user context: ', this.props.user);
    console.log('content context: ', this.props.content);
    return(
      <div className="dashboardContainer">
        <h2>Welcome back, {this.props.user.user.name}!<br />{this.props.content &&this.props.content.language.name} </h2>
        Total correct answers: {this.props.content.language.total_score}
        <Link to='/learn'>
        <button>Start practicing</button>
          </Link>
        <div className="infoArea">
          <div className="infoHeader"><h3>Words to practice</h3></div>
          <div className="wordsHolder">
            <div className="words">Words:
            <h4>{this.props.content.language.name}</h4>
            <ul>
              {this.props.content.words.map((word, index) => {
                return(
                  <li key={index}><h4>
                  {word.original}</h4>
                  correct answer count: {word.correct_count}<br />
                  incorrect answer count: {word.incorrect_count}
                  </li>
                )
              }) || this.state.words[0]}
            </ul>
            </div>
            <div className="counts">Correct / Incorrect Count
            <ul>
              {this.props.content.words.map((word, index) => {
                return(
                  <li key={index}>
                    correct answer count: {word.correct_count} 
                  </li>
                )
              }) || this.state.words[0]}
            </ul></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;