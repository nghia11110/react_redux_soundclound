import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TrackList from './TrackList';
import * as actions from '../../actions';

function mapStateToProps(state) {
  const tracks = state.tracks;
  return {
    tracks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);