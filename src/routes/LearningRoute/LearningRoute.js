import React, { Component } from 'react'
import Learning from '../../components/Learning/Learning'

class LearningRoute extends Component {
  constructor(props){
    super(props);
    this.state ={
        currentWord: {},
        language: {}
    }
  }

  
  render() {
    return (
      <section>
        <div className="viewport">
          <Learning />
        </div>
      </section>
    );
  }
}

export default LearningRoute
