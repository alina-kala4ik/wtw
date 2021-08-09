import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player";

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
    this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
  }

  handlerMouseEnter() {
    this.setState({
      isPlaying: true
    });
  }

  handlerMouseLeave() {
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {film, handlerFilmTitleClick} = this.props;
    const {name, previewVideoLink, previewImage} = film;
    const {isPlaying} = this.state;

    return (
      <article
        onMouseEnter={this.handlerMouseEnter}
        onMouseLeave={this.handlerMouseLeave}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            previewVideoLink={previewVideoLink}
            previewImage={previewImage}
            isPlaying={isPlaying} >
          </VideoPlayer>
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            onClick={(evt) => {
              evt.preventDefault();
              handlerFilmTitleClick(film);
            }}
          >
            {name}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  handlerFilmTitleClick: PropTypes.func.isRequired
};

export default FilmCard;
