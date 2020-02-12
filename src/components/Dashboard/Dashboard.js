import React from 'react';
import { Link } from 'react-router-dom';
import ContentContext from '../../contexts/ContentContext';
import './Dashboard.css';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      language: '',
      words: ['Placeholder']
    }
  }

 static defaultProps = {
  language: {
    name: 'Default Language',
    total_score: 0
  },
  user: {
    user: {
      name: 'Default username'
    }
  }
 }
 noFeedback = () => {
   this.context.feedbackFalse();
 }

 static contextType = ContentContext

  render(){
    return(
      <div className="dashboardContainer">

        <h2>Welcome back, {this.props.user.user.name || 'placeholder'}!
        <br />
        Language: {(this.context.language.name !== undefined && this.context.language.name) || 'placeholder'}
        <br />
        Total correct answers: {this.context.head.totalScore || '0'} </h2>

        <Link to='/learn'>
        <button onClick={this.noFeedback}>Start practicing</button>
          </Link>
        <div className="infoArea">
          <div className="infoHeader"><h3>Words to practice</h3></div>
          <div className="wordsHolder">
            <div className="words">
            <h4>{this.context.language.name || 'Language'}</h4>
            <ul>
              {this.context.words.map((word, index) => {
                return(
                  <li key={index}><h4>
                  {word.original}</h4>
                  <div>
                  correct answer count: {word.correct_count}<br />
                  incorrect answer count: {word.incorrect_count}
                  </div>
                  </li>
                )
              }) || this.state.words[0]}
            </ul>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;