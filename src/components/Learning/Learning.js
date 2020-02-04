import React from 'react'
import Stats from '../Stats/Statistics'
import ContentContext from '../../contexts/ContentContext';
import './Learning.css'

class Learning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }

  }

  static contextType = ContentContext;

  render() {
    return(
      <div>
        <div className="infoArea">
          <div className="infoHeader">
            <h3>Practice Time!</h3>
          </div>

          <div className="wordsHolder">
            <div className="words">Your word:
            <h4>Word goes here</h4>
            
            </div>
            <div className="guess">
              <input id="learn-guess-input" />
            </div>
          </div>
          <div className="button-holder">
            <button type="submit">Guess!</button>
          </div>
        </div>

        <Stats score={this.context.language ? this.context.language.total_score : 0}/>
      </div>
    )
  }
}

export default Learning;