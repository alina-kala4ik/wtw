import React from "react";
import ShowMoreButton from "./show-more-button";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter()
});

it(`call handlerShowMoreClick`, function () {
  const handlerShowMoreClick = jest.fn();

  const showMoreButton = Enzyme.shallow(
      <ShowMoreButton handlerShowMoreClick={handlerShowMoreClick}/>
  );

  const button = showMoreButton.find(`.catalog__button`);
  button.simulate(`click`);

  expect(handlerShowMoreClick).toHaveBeenCalledTimes(1);
});
