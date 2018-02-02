import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchRelease } from '../actions';

import { connect } from 'react-redux';

class ReleaseDetail extends Component {
  componentDidMount() {
    this.props.fetchRelease(81934);
  }

  render() {
    const { data } = this.props;

    if (!data){
      return <div>Loading..</div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-primary pull-xs-right"
          onClick={console.log(data)} >
          Here
          </button>
        {/* <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p> */}
      </div>
    )
  }
}

function mapStateToProps({ data }, ownProps) {
  return { data: data[ownProps.match.params.id] }
}


export default connect(mapStateToProps, { fetchRelease } )(ReleaseDetail);
