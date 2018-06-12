import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TrackList from './TrackList';
import * as actions from '../../actions';
import { CLIENT_ID } from '../../config';

function mapStateToProps(state) {
  const { tracks, activeTrack } = state.tracks;
  const { user } = state.auth;
  return {
    activeTrack,
    tracks,
    user,
    clientId: CLIENT_ID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    auth: bindActionCreators(actions.auth, dispatch),
    play: bindActionCreators(actions.play, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);