import React from "react";
import Main from "./../Main/main.jsx";

const App = (props) => {
  const {promotionTitle, promotionGenre, promotionReleaseDate} = props;

  return <Main
    promotionTitle={promotionTitle}
    promotionGenre={promotionGenre}
    promotionReleaseDate={promotionReleaseDate}
  />
}

export default App;