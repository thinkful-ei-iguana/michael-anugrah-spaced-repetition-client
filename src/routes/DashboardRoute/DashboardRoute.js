import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import Stats from '../../components/Stats/Statistics'

class DashboardRoute extends Component {

  
  render() {
    return (
      <section>

        <Dashboard content={this.props.content} user={this.props.user}/>
        <Stats score={this.props.content.language.total_score}/>    
      </section>
    );
  }
}

export default DashboardRoute
