import React from "react";
import render from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

it(`render show more button`, function () {
  const three = render
    .create(
        <ShowMoreButton
          handlerShowMoreClick={() => {}}
        />
    )
    .toJSON();

  expect(three).toMatchSnapshot();
});
