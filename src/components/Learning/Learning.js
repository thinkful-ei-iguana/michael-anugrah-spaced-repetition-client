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
          <h2>Translate the word:</h2>
              <span>{this.context.head.nextWord}</span>
              <br />
          </div>

          <div className="wordsHolder">
            <div className="guess">
              <form>
                <label htmlFor="learn-guess-input">What's the translation for this word?</label>
                <input id="learn-guess-input" type="text" required/>
                <button type="submit">Submit your answer</button>
              </form>
            </div>

        </div>


        </div>

        <Stats />
      </div>
    )
  }
}

export default Learning;