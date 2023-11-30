import 'jest-fetch-mock';

declare global {
  const fetch: FetchMock;
}