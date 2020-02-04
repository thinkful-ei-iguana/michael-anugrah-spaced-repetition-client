import React from 'react';
import './Statistics.css';
import { Link } from 'react-router-dom';
import ContentContext from '../../contexts/ContentContext'

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static contextType = ContentContext;
  render() {
    console.log(this.context);
    return(
      <div className="stats">
        <Link to='/'>
          <button>Dashboard</button>
        </Link>
        
        Total Score: {this.props.score || 0}
        </div>
    )
  }
}

export default Stats;