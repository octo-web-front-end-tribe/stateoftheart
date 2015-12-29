import React from 'react'

class CardBlock extends React.Component {

    render() {

        var stacksElements = [];

        if (this.props.stacks) {

            const stacks = this.props.stacks.split(/[\s,;-]+/).map(
                element => element.trim()
            );

            stacks.forEach(stack => {

                const stackName = stack.trim();
                stack = `/images/${stackName}.png`;

                stacksElements.push(
                    <img className="img-circle" src={stack}/>
                );
            });
        }

        console.log(stacksElements);

        return (
            <div className="card-block stacks">
                {stacksElements}
            </div>
        );
    }
}

export default CardBlock
