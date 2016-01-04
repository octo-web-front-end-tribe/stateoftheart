import React from 'react'
import ProjectImage from './ProjectImage'
import CardBlock from './CardBlock'

class ProjectDetail extends React.Component {

    render () {

        const project = this.props.project;
        const projectUrl = `http://localhost:3000/projects/${this.props.project._id}/edit`;

        return (
            <div className="card">
                <a href={projectUrl}>
                    <div className="card-block">
                        <h4 className="card-title">
                            <h4 className="card-title">{project.name}</h4>
                        </h4>
                    </div>
                    <ProjectImage image={project.image} name={project.name} />
                </a>
                <CardBlock stacks={project.stacks} />
            </div>
        );
    }
}

export default ProjectDetail