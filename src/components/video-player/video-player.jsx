import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._timer = null;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const videoTag = this._videoRef.current;


    if (isPlaying) {
      this._timer = setTimeout(() => {
        videoTag.play();
      }, 1000);
    } else {
      clearTimeout(this._timer);
      videoTag.load();
    }
  }

  render() {
    const {previewVideoLink, previewImage} = this.props;

    return <video
      autoPlay={false}
      poster={previewImage}
      src={previewVideoLink}
      muted={true}
      ref={this._videoRef}
    >
    </video>;
  }
}

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
