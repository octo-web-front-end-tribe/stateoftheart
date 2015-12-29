import React from 'react'

class Header extends React.Component {

    render () {

        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">{this.props.title}</h1>
                    <p className="lead text-muted">Faciliter la collecte des stacks des missions Octo dans le but de les
                        partager et de voir la tendance actuelle</p>
                </div>
            </section>
        )
    }
}

export default Header