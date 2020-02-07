import React from 'react'
import ContentContext from '../../contexts/ContentContext'
class Correct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static contextType = ContentContext

  handleNext = (ev) => {
    ev.preventDefault();
    this.context.nextWord();
  }

  render() {
    return(
      <div>
        <div className="DisplayScore">
          <p>Your total score is: {this.context.feedbackRes.totalScore}</p>
        </div>

        <h3>You were correct! :D</h3>
        <div className="DisplayFeedback">
        <p>The correct translation for {this.context.head.nextWord} was {this.context.feedbackRes.answer} and you chose {this.context.guess}!</p>
        </div>
        

        <button onClick={this.handleNext}>Try another word!</button>
      </div>
    )
  }
}

export default Correct;