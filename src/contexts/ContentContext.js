import React from 'react';
import config from '../config';
import TokenService from '../services/token-service';

const ContentContext = React.createContext({
  error: null,
  language: {},
  words: []
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

  async componentDidMount() {
    let responsedata = await this.getLanguage();
    this.setState({
      error: null,
      language: responsedata.language,
      words: responsedata.words
    });
    console.log(this.state);
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
      <ContentContext.Provider content={content}>
        {this.props.children}
      </ContentContext.Provider>
    )
  }
}



