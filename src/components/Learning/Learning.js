import React from 'react'
import Stats from '../Stats/Statistics'
import ContentContext from '../../contexts/ContentContext';
import LangService from '../../services/lang-api-service';
import Feedback from '../Feedback/Feedback'
import './Learning.css'

class Learning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      feedback: false,
      correct: false
    }
  }

  static contextType = ContentContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    let guess = this.state.guess;

    this.context.setGuess(guess);
    LangService.postGuess(guess)
    .then(feedback => {
      this.context.setFeedback(feedback);
      this.setState({correct: feedback.isCorrect})
    }).then( () => this.setState({guess: ''}));

    this.context.giveFeedback();
  }

  changeGuess = (ev) => {
    ev.preventDefault();
    this.setState({
      guess: ev.target.value
    })
  }

  render() {
    return(
      <div>
        <div className="infoArea">
          <div className="infoHeader">
          <h2>Translate the word:</h2>
              <span>{this.context.head.nextWord}</span>
              <br />
          </div>
          {!this.context.feedback && 
               
          <div className="wordsHolder">
            <div className="guess">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="learn-guess-input">What's the translation for this word?</label>
                <input id="learn-guess-input" value={this.state.guess} onChange={this.changeGuess} type="text" required/>
                <button type="submit">Submit your answer</button>
              </form>
            </div>
          </div>
          }

        {this.context.feedback && <Feedback correct={this.state.correct}/>}

        </div>

        <Stats />
      </div>
    )
  }
}

export default Learning;