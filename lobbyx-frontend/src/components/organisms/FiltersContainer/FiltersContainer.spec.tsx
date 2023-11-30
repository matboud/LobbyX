import React, { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FiltersContainer } from "../index";

// Mock child components
jest.mock("../../atoms/Button/", () => ({ children, onClick }: {children: ReactNode, onClick: () => {}}) => (
  <button onClick={onClick}>{children}</button>
));
jest.mock("../../atoms/Spinner/", () => () => <span>Spinner</span>);
jest.mock("../../molecules/ToggleFilter", () => ({
  __esModule: true,
  default: jest.fn(({ text, onToggle }) => (
    <button onClick={() => onToggle(true)}>{text}</button>
  )),
}));

// Mock Redux hooks
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

describe("FiltersContainer Component", () => {
  const initialState = { filter: { loading: false } };
  const mockStore = configureStore([thunk]);

  it("renders without crashing", () => {
    render(<FiltersContainer filters={{}} />);
  });

  it("toggles filters correctly", () => {
    const store = mockStore(initialState);
    render(
      <FiltersContainer filters={{ Type: [{ id: "1", title: "Filter 1" }] }} />
    );
    fireEvent.click(screen.getByText("Filter 1"));
  });
});
