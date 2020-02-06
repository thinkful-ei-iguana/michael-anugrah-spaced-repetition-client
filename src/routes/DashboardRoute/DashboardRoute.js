import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import Stats from '../../components/Stats/Statistics'

class DashboardRoute extends Component {

  
  render() {
    return (
      <section>
        <div className="viewport">
          <Dashboard content={this.props.content} user={this.props.user}/>
        </div>
        <Stats />    
      </section>
    );
  }
}

export default DashboardRoute
