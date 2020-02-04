import React from 'react';
import './Statistics.css'

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props)
    return(
      <div className="stats">Total Score: {this.props.score}</div>
    )
  }
}

export default Stats;