import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';

class DashboardRoute extends Component {

  
  render() {
    return (
      <section>

        <Dashboard content={this.props.content} user={this.props.user}/>
             
      </section>
    );
  }
}

export default DashboardRoute
