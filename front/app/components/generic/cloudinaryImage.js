import React from 'react'

class CloudinaryImage extends React.Component {

    static defaultProps = {
        preset: '',
        transformation: '',
        height: 0,
        width: 0,
        name: '',
        imageId: null
    };

    getCloudinaryUrl() {

        return `http://res.cloudinary.com/${this.props.preset}/image/upload/${this.props.transformation},h_${this.props.height},w_${this.props.width}/${this.props.imageId}`;
    }

    render() {

        return (
            <img src={ this.getCloudinaryUrl() } alt={this.props.imageId}/>
        );
    }
}

export default CloudinaryImage;