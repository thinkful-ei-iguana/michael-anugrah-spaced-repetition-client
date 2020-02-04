import React from 'react';
import config from '../config';
import TokenService from '../services/token-service';
import LangService from '../services/lang-api-service';

const ContentContext = React.createContext({
  error: null,
  language: {},
  words: [],
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
      words: [],
      head: {}
    } 
  }

  componentDidMount() {
    this.setContext();
  }

  setContext = () => {
    this.getLanguage().then((resData) => this.setState({
      error: null,
      language: resData.language,
      words: resData.words
    }));
    LangService.getHead().then((resData) => this.setState({
      head: resData
    }))
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
      head: this.state.head
    }
    return (
      <ContentContext.Provider value={content}>
        {this.props.children}
      </ContentContext.Provider>
    )
  }
}



