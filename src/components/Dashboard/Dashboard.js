import React from 'react';
import './Dashboard.css';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      language: '',
      words: ['Placeholder']
    }
  }

  // {this.state.language}
 componentDidMount() {
 }


  render(){
    console.log('user context: ', this.props.user);
    console.log('content context: ', this.props.content);
    return(
      <div className="dashboardContainer">
        <h3>Welcome back, {this.props.user.user.name} !</h3>
        <button>Practice Now!</button>
        <div className="infoArea">
          <div className="infoHeader">Words to practice in : </div>
          <div className="wordsHolder">
            <div className="words">Words:
            <ul>
              {this.props.content.words.map((word, index) => {
                return(
                  <li key={index}>
                    {word.original}
                  </li>
                )
              }) || this.state.words[0]}
            </ul>
            </div>
            <div className="counts">Correct / Incorrect Count
            <ul>
              {this.props.content.words.map((word, index) => {
                return(
                  <li key={index}>
                    {word.correct_count} / {word.incorrect_count}
                  </li>
                )
              }) || this.state.words[0]}
            </ul></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;