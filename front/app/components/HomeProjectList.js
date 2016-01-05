import React from 'react'
import ProjectDetail from './ProjectDetail'

class HomeProjectList extends React.Component {

    state = {projects: []};

    componentWillMount() {

        let xhr = new XMLHttpRequest();
        xhr.open('get', '/projects', true);
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);
            this.setState(data);
        };
        xhr.send();
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