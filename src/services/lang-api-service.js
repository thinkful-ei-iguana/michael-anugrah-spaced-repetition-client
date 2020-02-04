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
  }
}

export default LangService;
