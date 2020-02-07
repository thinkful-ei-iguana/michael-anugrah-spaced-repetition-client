import React from 'react';
import UserContext from '../../contexts/UserContext'
import Stats from '../Stats/Statistics'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  static contextType = UserContext

  render() {
    return (
      <footer>
        {this.context.user.name && <Stats />}
      </footer>
    )
  }
 

}

export default Footer;