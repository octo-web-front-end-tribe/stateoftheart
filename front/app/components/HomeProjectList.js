import React from 'react'
import ProjectDetail from './ProjectDetail'
import SuperAgent from 'superagent'

class HomeProjectList extends React.Component {

    state = {projects: []};

    componentWillMount() {

        SuperAgent.get('/api/projects/')
            .end(function (err, res) {
                this.setState(res.body);
            }.bind(this));
    }

    renderProjectDetails() {

        if (this.state.projects.length == 0) {
            return <div>Loading projects...</div>
        }

        return this.state.projects.map(project => (
            <ProjectDetail key={project._id} project={project}/>
        ));
    }

    render() {

        return (
            <div className="album text-muted">
                <div className="container">
                    <div className="row" id="project-list">
                        { this.renderProjectDetails() }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeProjectList;