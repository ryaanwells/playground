import React, { Component } from 'react';
import './App.css';
import PageLayoutContainer from './containers/PageLayoutContainer';
import GoalListContainer from './containers/GoalListContainer';
import GoalDetailContainer from './containers/GoalDetailContainer';

class App extends Component {
  render() {
    return (
      <PageLayoutContainer
        pageContent = {<GoalListContainer />}
        sidebarContent = {<GoalDetailContainer />}> 
      </PageLayoutContainer>
    );
  }
}

export default App;
