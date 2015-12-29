import React from 'react'

class ProjectImage extends React.Component {

    render() {

        let image = require("../../public/images/no-image.svg");

        if (this.props.image) {
            image = `http://res.cloudinary.com/dyfaki2cl/image/upload/c_pad,h_180,w_318/${this.props.image}`;
        }

        return (
            <img src={image} alt={this.props.name}/>
        );
    }
}

export default ProjectImage;