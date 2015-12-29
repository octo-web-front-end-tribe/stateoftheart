import React from 'react'

class CardBlock extends React.Component {

    render() {

        var stackElements = [];

        if (this.props.stacks) {

            const stacks = this.props.stacks.split(/[\s,;-]+/).map(
                element => element.trim()
            );

            stacks.forEach(stack => {

                const stackName = stack.trim();

                if (stackName) {
                    stack = require(`../../public/images/${stackName}.png`);
                    stackElements.push(
                        <img className="img-circle" src={stack}/>
                    );
                }
            });
        }

        return (
            <div className="card-block stacks">
                {stackElements}
            </div>
        );
    }
}

export default CardBlock
