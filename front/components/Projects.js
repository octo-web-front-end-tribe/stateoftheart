import React, { PropTypes, Component } from 'react'
import Project from './Project'

class Projects extends Component {
  render() {
    return (
      <div className="album text-muted">
        <div className="container">
          <div className="row" id="project-list">
            {this.props.projects.map((project) =>
              <Project key={project._id} project={project}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects;
