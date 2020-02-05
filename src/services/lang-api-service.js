import config from '../config';
import TokenService from './token-service'

const LangService = {
  getLang: () => {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'content-type':'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => res.json())
    .then(response => response);
  },
  getHead: () => {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type':'applicatopn/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => res.json())
    .then(head => head);
  },
  postGuess: (guess) => {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'authorization':`Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        guess: guess
      })
    })
    .then(res => res.json())
    .then(feedback => feedback);
  }

}

export default LangService;
