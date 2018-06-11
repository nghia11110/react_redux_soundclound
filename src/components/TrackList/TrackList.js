import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array,
    auth: PropTypes.func
  }

  static defaultProps = {
    tracks: []
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.auth} type='button'>Login</button>
        </div>
        <div>
        {
          this.props.tracks.map((track, key) => {
            return <div key={key}>Track: {track.title}</div>;
          })
        }
        </div>
      </div>
    )
  }
}
