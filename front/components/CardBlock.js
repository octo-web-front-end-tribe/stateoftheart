import React from 'react'

class CardBlock extends React.Component {

    static defaultProps = { stacks: ''};

    getStackElements () {
        return this.props.stacks
        .split(/[\s,;-]+/)
        .map(element => element.trim())
        .filter(element => element)
        .map(stackName => {
            let stackImage = require(`../public/images/${stackName}.png`);
            return <img key={stackName} className="img-circle" src={stackImage} />
        });
    }

    render() {

        return (
            <div className="card-block stacks">
                {this.getStackElements()}
            </div>
        );
    }
}

export default CardBlock;
