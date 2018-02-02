import _ from 'lodash';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { fetchRelease } from '../actions';
import { connect } from 'react-redux';

class ReleaseDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRelease(id);
  }

  mapImages(release) {
    return _.map(release.images, image => {
      return <image
        src={image.uri}
        height="200" width="200" padding="10"
        onClick={() => console.log("here")}></image>
    });
  }

  mapArtists(release){return _.map(release.artists, artist => {
      return <div>{artist.name} {artist.join}</div>
    })
  }

  mapVideos(release){return _.map(release.videos, video => {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <ReactPlayer url={video.uri} height="200" width="200" />
            </div>
          </div>
        </div>
      )
    })
  }

  renderRelease() {
    const { data } = this.props
      return (
        <li className="list-group-item" key={data.id}>
          <h1>{this.mapArtists(data)}</h1>
          <h2>{data.title}</h2>
          {this.mapImages(data)}
          {this.mapVideos(data)}
        </li>
      )
  }

  render() {
    const { data } = this.props;

    if (!data){
      return <div>Loading..</div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <ul className="list-group">
          {this.renderRelease()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ data }, ownProps) {
  return { data: data[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchRelease } )(ReleaseDetail);
