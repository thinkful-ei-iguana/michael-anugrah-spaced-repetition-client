import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import UserContext from '../../contexts/UserContext';
import ContentContext from '../../contexts/ContentContext';

class DashboardRoute extends Component {
  render() {
    return (

      <section>
        <UserContext.Consumer>
          {user => (
            <ContentContext.Consumer>
              {content => (
                <Dashboard content={content} user={user} />
              )}
            </ContentContext.Consumer>   
          )}
        </UserContext.Consumer> 
      </section>

    );
  }
}

export default DashboardRoute
