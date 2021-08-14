import React from "react";
import PropTypes from "prop-types";

const TABS = {
  overview: `Overview`,
  details: `Details`,
  reviews: `Reviews`,
};

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TABS.overview,
    };
    this._changeActiveTab = this._changeActiveTab.bind(this);
  }

  _changeActiveTab(evt, tabName) {
    evt.preventDefault();
    this.setState({
      activeTab: tabName,
    });
  }

  _getRaitingLevel(rating) {
    if (rating === 0 || rating < 3) {
      return `Bad`;
    }
    if (rating >= 3 || rating < 5) {
      return `Normal`;
    }
    if (rating >= 5 || rating < 8) {
      return `Good`;
    }
    if (rating >= 8 || rating < 10) {
      return `Very good`;
    }
    if (rating >= 10) {
      return `Awesome`;
    }
    return null;
  }

  _getRunTime(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}h ${minutes}m`;
  }

  render() {
    const {activeTab} = this.state;
    const tabsList = Object.values(TABS);
    const {rating, scoresCount, description, director, starring, runTime, genre, released} = this.props.film;
    const ratingLevel = this._getRaitingLevel(rating);
    const formatedRuntime = this._getRunTime(runTime);


    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabsList.map((tab) => {
              return (
                <li
                  className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``}`}
                  key={tab}
                  onClick={(evt) => {
                    this._changeActiveTab(evt, tab);
                  }}
                ><a href="#" className="movie-nav__link">{tab}</a></li>
              );
            })}
          </ul>
        </nav>

        {activeTab === TABS.overview &&
        <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{ratingLevel}</span>
              <span className="movie-rating__count">{scoresCount} ratings</span>
            </p>
          </div>
          <div className="movie-card__text">
            <p>{description}</p>
            <p className="movie-card__director"><strong>Director: {director}</strong></p>
            <p className="movie-card__starring">
              <strong>Starring: {starring.join(`, `)}</strong>
            </p>
          </div>
        </React.Fragment>
        }

        {activeTab === TABS.details &&
          <React.Fragment>
            <div className="movie-card__text movie-card__row">
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Director</strong>
                  <span className="movie-card__details-value">{director}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {starring.map((actor, i) => {
                      return (
                        <React.Fragment key={actor}>
                          {actor}{i === starring.length - 1 ? `` : `,`} <br/>
                        </React.Fragment>
                      );
                    })}
                  </span>
                </p>
              </div>

              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Run Time</strong>
                  <span className="movie-card__details-value">{formatedRuntime}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">{genre}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">{released}</span>
                </p>
              </div>
            </div>
          </React.Fragment>
        }

        {activeTab === TABS.reviews &&
          <React.Fragment>
            <div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the
                      glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed
                      movies in years.</p>

                    <footer className="review__details">
                      <cite className="review__author">Kate Muir</cite>
                      <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,9</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">Anderson`s films are too precious for some, but for those of us willing
                      to lose ourselves in them, they`re a delight. `The Grand Budapest Hotel` is no different, except
                      that he has added a hint of gravitas to the mix, improving the recipe.</p>

                    <footer className="review__details">
                      <cite className="review__author">Bill Goodykoontz</cite>
                      <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,0</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">I didn`t find it amusing, and while I can appreciate the creativity,
                      it`s an hour and 40 minutes I wish I could take back.</p>

                    <footer className="review__details">
                      <cite className="review__author">Amanda Greever</cite>
                      <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,0</div>
                </div>
              </div>
              <div className="movie-card__reviews-col">
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally
                      silly, and here and there, gruesome and/or heartbreaking.</p>

                    <footer className="review__details">
                      <cite className="review__author">Matthew Lickona</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,2</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the
                      content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,6</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the
                      content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,0</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        }

      </div>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.object.isRequired
};

export {Tabs, TABS};
