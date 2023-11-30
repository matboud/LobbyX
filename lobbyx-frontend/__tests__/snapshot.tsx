import { render } from "@testing-library/react";
import Home from "@/app/page";
import ReduxProvider from "@/redux/provider";
import { act } from "@testing-library/react";

it("page renders correctly", async () => {
  let container;

  await act(async () => {
    const result = render(
      <ReduxProvider>
        <Home />
      </ReduxProvider>
    );
    container = result.container;
  });

  expect(container).toMatchSnapshot();
});
