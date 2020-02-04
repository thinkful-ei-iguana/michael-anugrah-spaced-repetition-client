import React from 'react';
import config from '../config';
import TokenService from '../services/token-service';

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
      language: {},
      words: []
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
      words: this.state.words
    }
    return (
      <ContentContext.Provider value={content}>
        {this.props.children}
      </ContentContext.Provider>
    )
  }
}



