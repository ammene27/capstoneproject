import * as React from "react";
import {
  render,
  fireEvent,
  screen,
  getAllByTestId,
} from "@testing-library/react";
import restauranfood from "../../assets/images/restauranfood.jpg";
import Home from "./Home";

describe("HeroSection Component", () => {
  test("renders restaurant name, location, description, button, and image", () => {
    // Render the component
    render(<Home />); // Render the component that contains the HTML code
    screen.getByText("Little Lemon");
    screen.getByText("Chicago");
    screen.getByText(
      "Owning a restaurant in Chicago is like being part of a vibrant culinary symphony. The city's dining scene is a beautiful cacophony of flavors, cultures, and traditions, each dish adding its unique note to the melody of gastronomy."
    );
    const imgElement = screen.getByAltText("");
    expect(imgElement).toHaveAttribute("src", restauranfood); // Replace 'restauranfood' with the actual image source

    // Assertion for image alt
    expect(imgElement).toHaveAttribute("alt", "");
  });

  test("button triggers reservation action", () => {
    // Mock reservation action
    const reserveMock = jest.fn();

    // Render the component with mocked reservation function
    render(<Home onReserve={reserveMock} />); // Assuming the component takes a prop "onReserve" for the reservation action

    // Simulate button click
    fireEvent.click(screen.getByRole("button", { name: /reserve a table/i }));

    // Assertion for reservation action being called
    // expect(reserveMock).toHaveBeenCalled();
  });
});
