import React from 'react'

class ProjectImage extends React.Component {

    render() {

        let imageUrl = "/public/images/projects/no-image.svg";

        if (this.props.image) {
            imageUrl = `http://res.cloudinary.com/dyfaki2cl/image/upload/c_pad,h_180,w_318/${this.props.image}`;
        }

        return (
            <img src={imageUrl} alt={this.props.name}/>
        );
    }
}

export default ProjectImage;