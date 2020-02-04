import React, { Component } from 'react'
import Learning from '../../components/Learning/Learning'
import LangService from '../../services/lang-api-service'
class LearningRoute extends Component {
  constructor(props){
    super(props);
    this.state ={
        currentWord: {},
        language: {}
    }
  }
  
  async componentDidMount(){
    const lang = await LangService.getLang();
    // const headWord = LangService.getHead();
    console.log(lang);
    this.setState({
      language: lang.language
    })
  }
  
  render() {
    return (
      <section>
        <Learning lang={this.state.language}/>
      </section>
    );
  }
}

export default LearningRoute
