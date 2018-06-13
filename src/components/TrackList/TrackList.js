import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Track from './Track';

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.object,
    auth: PropTypes.func,
    user: PropTypes.object,
    activeTrack: PropTypes.object,
    play: PropTypes.func,
    clientId: PropTypes.string,
  }

  static defaultProps = {
    tracks: []
  }

  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.player);

    if (!audioElement) { return; }

    const { activeTrack } = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render() {
    const {
      tracks,
      activeTrack,
      user,
      auth,
      play,
      clientId
    } = this.props;
    return (
      <div>
        <div>
          {
            user
              ? <div>Hello {user.username}</div>
              : <button onClick={auth} type='button'>Login</button>
          }
        </div>
        <div>
          {
            tracks.map((track) => {
              return <Track track={track} play={play}/>
            })
          }
        </div>
        <div>
          {
            Object.keys(activeTrack).length ?
              <audio id='player' ref='audio' controls src={`${activeTrack.origin.stream_url}?client_id=${clientId}`} />
              : null
          }
        </div>
      </div>
    )
  }
}
