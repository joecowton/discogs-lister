import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  renderData(data) {
    return(
      <div className="card card-block">
        <h4 className="card title">{data.title}</h4>
        <p className="card-text">Label</p>
        <a className="btn btn-primary">View</a>
      </div>
    )
  }

  render () {
    return(
      <div>
        {this.props.data.map(this.renderData)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.data);
  return { data: state.data }
}

export default connect(mapStateToProps, actions)(ReleaseList)
