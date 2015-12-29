import React from 'react'
import ProjectDetail from './ProjectDetail'

class HomeProjectList extends React.Component {

    constructor() {

        super();
        this.render = this.render.bind(this);
        this.state = {projects: []};

    }

    componentDidMount() {

        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:3000/projects', true);
        xhr.onload = () => {
            var data = JSON.parse(xhr.responseText);
            this.setState(data);
        };
        xhr.send();
    }

    render() {

        if (this.state.projects.length == 0) {
            return <div>Loading projects...</div>
        }

        let projectComponents = [];

        this.state.projects.forEach(project => {
            projectComponents.push(
                <ProjectDetail project={project}/>
            );
        });

        return (
            <div className="album text-muted">
                <div className="container">
                    <div className="row" id="project-list">
                        {{projectComponents}}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeProjectList