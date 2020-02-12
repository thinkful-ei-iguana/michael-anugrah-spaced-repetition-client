import React from 'react'
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

  componentDidMount() {
    this.context.getHead();
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();
    let guess = this.state.guess.toLowerCase();
    await this.context.setGuess(guess);
    let feedback = await LangService.postGuess(guess);
    await this.context.setFeedback(feedback);
    this.setState({guess: ''});
    this.setState({correct: feedback.isCorrect})
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
            <div className="stack">
              <h2>Translate the word:</h2>
              <span>{this.context.head.nextWord}</span>
            </div>
              <br />
          </div>
          {!this.context.feedback && 
               
          <div className="wordsHolder">
            <div className="guess">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="learn-guess-input">What's the translation for this word?</label>
                <input id="learn-guess-input" value={this.state.guess} onChange={this.changeGuess} type="text" autocomplete="off" required/>
                <button type="submit">Submit your answer</button>
              </form>
            </div>
          </div>
          }

        {this.context.feedback && <Feedback correct={this.state.correct}/>}

        </div>
      </div>
    )
  }
}

export default Learning;