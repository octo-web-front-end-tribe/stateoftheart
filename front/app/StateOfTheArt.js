import React from 'react'
import Header from './components/Header'
import HomeProjectList from './components/HomeProjectList'

class StateOfTheArt extends React.Component {

    render () {

        return (
            <div>
                <Header title="StateOfTheArt" />
                <HomeProjectList />
            </div>
        )
    }
}

export default StateOfTheArt;