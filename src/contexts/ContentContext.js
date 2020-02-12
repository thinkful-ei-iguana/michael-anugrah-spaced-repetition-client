import React from 'react';
import config from '../config';
import TokenService from '../services/token-service';
import LangService from '../services/lang-api-service';

const ContentContext = React.createContext({
  error: null,
  language: {},
  words: [],
  setContext: () => {},
  head: {},
  getHead: () => {},
  feedbackRes: {},
  nextWord: () => {},
  feedback: null,
  guess: '',
  setGuess: () => {},
  feedbackFalse: () => {},
})

export default ContentContext;


export class ContentProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      language: {
        id: 0,
        name: 'placeholder',
        user_id: 0,
        head: 1,
        total_score: 0
      },
      setContext: () => {},
      words: [],
      head: {},
      getHead: () => {},
      feedbackRes: {
        nextWord: '',
        wordCorrectCount: 0,
        wordIncorrectCount: 0,
        totalScore: 0,
        answer: '',
        isCorrect: false,
        guess: '',
        setGuess: () => {}
    },
      nextWord: this.nextWord,
      giveFeedback: this.giveFeedback,
      setFeedback: () => {},
      feedback: false,
      feedbackFalse: () => {},
    } 
  }


  giveFeedback = () => {
    this.setState({feedback: true})
  }

  nextWord = () => {
    this.setState({
      head: {
        nextWord: this.state.feedbackRes.nextWord,
        totalScore: this.state.feedbackRes.totalScore,
        wordCorrectCount: this.state.feedbackRes.wordCorrectCount,
        wordIncorrectCount: this.state.feedbackRes.wordIncorrectCount
      },
      feedback:false
    }
    )
  }

  getHead = () => {
    LangService.getHead().then((resData) => {
      this.setState({
      head: resData
      })
    });
  } 

  setGuess = (guess) => {
    this.setState({
      guess: guess
    })
  }

  feedbackFalse = () => {
    this.setState({
      feedback: false
    })
  }

  setContext = async () => {
    await this.getLanguage().then((resData) => this.setState({
      error: null,
      language: resData.language,
      words: resData.words
    }));
    this.getHead();
  } 
  
  setFeedback = (resData) => {
    this.setState({
      feedbackRes: resData
    })
  }

  getLanguage = () => {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'content-type':'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => res.json())
    .then(response => response);
  }

  render() {
    const content = {
      error: this.state.error,
      language: this.state.language,
      words: this.state.words,
      head: this.state.head,
      setContext: this.setContext,
      getHead: this.getHead,
      nextWord: this.state.nextWord,
      giveFeedback: this.state.giveFeedback,
      feedbackRes: this.state.feedbackRes,
      setFeedback: this.setFeedback,
      feedback: this.state.feedback,
      guess: this.state.guess,
      setGuess: this.setGuess,
      feedbackFalse: this.feedbackFalse,
    }
    return (
      <ContentContext.Provider value={content}>
        {this.props.children}
      </ContentContext.Provider>
    )
  }
}



