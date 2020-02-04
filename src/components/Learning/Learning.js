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
            Kill me.
          </div>

          <div className="wordsHolder">
            <div className="words">
              <h2>Translate the word:</h2>
              <span>{this.context.head.nextWord}</span>
            </div>

            <div className="guess">
              <form>
                <label for="learn-guess-input">What's the translation for this word?</label>
                <input id="learn-guess-input" type="text" required/>
                <button type="submit">Submit your answer</button>
              </form>
            </div>

        </div>


        </div>

        <Stats score={this.context.language ? this.context.language.total_score : 0}/>
      </div>
    )
  }
}

export default Learning;