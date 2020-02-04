import React from 'react';
import './Statistics.css';
import { Link } from 'react-router-dom';
import ContentContext from '../../contexts/ContentContext'

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static contextType = ContentContext;
  render() {
    console.log(this.context);
    return(
      <div className="stats">
     
          <p>
            Your total score is: {this.context.head.totalScore || 0}
          </p>
          <p>
            You have answered this word correctly {this.context.head.wordCorrectCount} times.
          </p>
          <p>
            You have answered this word incorrectly {this.context.head.wordIncorrectCount} times.
          </p>
         
      </div>
    )
  }
}

export default Stats;