import React from 'react'
import CloudinaryImage from '../generic/cloudinaryImage';
import CardBlock from './CardBlock'

class ProjectDetail extends React.Component {

    render () {

        let project = this.props.project;
        let projectUrl = `/projects/${this.props.project._id}/edit`;

        return (
            <div className="card">
                <a href={projectUrl}>
                    <div className="card-block">
                        <h4 className="card-title">
                            {project.name}
                        </h4>
                    </div>
                    <CloudinaryImage preset="dyfaki2cl" transformation="c_pad" height="180" width="318" name={project.name} imageId={project.image} />
                </a>
                <CardBlock stacks={project.stacks} />
            </div>
        );
    }
}

export default ProjectDetail;
