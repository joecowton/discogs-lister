import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  renderData(data) {
    return(
      <div className="a">
        <li
          key={data.title}
          className="list-group-item">
          <img className="img img-tumbnail img-circle" src={data.thumb}></img>
        </li>
      </div>
    )
  }

  render () {
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
