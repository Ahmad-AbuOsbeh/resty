import { render, screen } from '@testing-library/react';
import App from './app';
import '@testing-library/jest-dom/extend-expect';

test('app component tests ', () => {
  render(<App />);
  const linkElement = screen.getByText('Request Method:');
  // console.log(linkElement);
  expect(linkElement).toHaveTextContent('Request Method:');
  expect(linkElement).toBeInTheDocument();
});
