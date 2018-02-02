import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  handleClick() {
  }

  renderData(data) {
    return(
      <div className="a">
        <li key={data.id} className="list-group-item">
          <Link to={`/release/${data.id}`}>
            <img className="img img-tumbnail img-circle" src={data.thumb}></img>
          </Link>
        </li>
      </div>
    )
  }

  render () {
    if (!this.props.data){
      return <div>Loading..</div>
    }

    return(
      <div className="release-list">
        {this.props.data.map(this.renderData)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { data: state.data }
}

export default connect(mapStateToProps, actions)(ReleaseList)
