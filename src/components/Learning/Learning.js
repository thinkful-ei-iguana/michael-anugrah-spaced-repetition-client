import React from 'react'
import Stats from '../Stats/Statistics'
import ContentContext from '../../contexts/ContentContext'

class Learning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  static contextType = ContentContext;

  render() {
    console.log(this.context.language.total_score)
    return(
      <div>
        Learning Here!

        <Stats score={this.context.language.total_score}/>
      </div>
    )
  }
}

export default Learning;