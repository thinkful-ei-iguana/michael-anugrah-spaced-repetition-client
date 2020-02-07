import React from 'react';
import './Statistics.css';
import ContentContext from '../../contexts/ContentContext'

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static contextType = ContentContext;
  render() {
    return(
      <div className="stats">
          <p>
            Your total score is: <strong>{this.context.head.totalScore}</strong>
          </p>
          <p>
            You have answered this word correctly <strong>{this.context.head.wordCorrectCount}</strong> times.
          </p>
          <p>
            You have answered this word incorrectly <strong>{this.context.head.wordIncorrectCount}</strong> times.
          </p>
         
      </div>
    )
  }
}

export default Stats;