/**
 * Mocks the useRouter hook from next/router.
 * -----------------------------------------------------------------------
 * this is needed incasse we want to test a component that uses the router.
 */

import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
  push: jest.fn(),
  back: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(),
}));

// [Optionally] you can set return values mockImplementationOnce
const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));
