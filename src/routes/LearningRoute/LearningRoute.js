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
      <section className="viewport">
          <Learning />
      </section>
    );
  }
}

export default LearningRoute
