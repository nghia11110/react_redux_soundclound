import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    play: PropTypes.func.isRequired
  };

  render() {
  	const {
  	  track,
  	  play
  	} = this.props;
  	const {
      origin: {
      	artwork_url,
      	title
      }
  	} = track;
    return (
      <div className='track'>
        <img src={artwork_url} />
        {title}
        <button onClick={() => play(track)} type='button'>Play</button>
      </div>
    )
  }
}