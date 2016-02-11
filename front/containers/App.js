import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchProjectsIfNeeded } from '../actions'
import Projects from '../components/Projects'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProjectsIfNeeded())
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(fetchProjectsIfNeeded())
  }

  render() {
    const { projects, isFetching, lastUpdated } = this.props
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href='#'
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isFetching && projects.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && projects.length === 0 &&
          <h2>Empty.</h2>
        }
        {projects.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Projects projects={projects} />
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    items: projects
  } = state || {
    isFetching: true,
    items: []
  }

  return {
    projects,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
