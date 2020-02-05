import React from 'react';
import Correct from '../Correct/Correct';
import Incorrect from '../Incorrect/Incorrect';

class Feedback extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        {this.props.correct && <Correct />}
        {!this.props.correct && <Incorrect />}
      </div>
    )
  }
}

export default Feedback