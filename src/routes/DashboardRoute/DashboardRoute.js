import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import ContentContext from '../../contexts/ContentContext';
import Stats from '../../components/Stats/Statistics'

class DashboardRoute extends Component {

  static contextType = ContentContext

  componentDidMount() {
    this.context.setContext();
  }
  
  render() {
    return (
      <section className="viewport">
          <Dashboard content={this.props.content} user={this.props.user}/>
        <Stats />    
      </section>
    );
  }
}

export default DashboardRoute
