import React from 'react'
import Header from './Header'
import ProjectList from './ProjectList'
import AddProject from '../containers/AddProject'

const App = () => (
  <div>
    <Header title="StateOfTheArt" />
    <AddProject />
    <ProjectList />
  </div>
)

export default App;
