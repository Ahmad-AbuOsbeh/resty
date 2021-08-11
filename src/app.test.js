import { render, screen } from '@testing-library/react';
import App from './app';
import Results from './components/results';

test('app component tests ', () => {
  render(<App />);
  const linkElement = screen.getByText('Request Method:');
  expect(linkElement).toBeInTheDocument();
});

it('Should render pokemon data', () => {
  const data = [
    { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    { name: 'fake thing 2', url: 'http://fakethings.com/2' },
  ];
  render(<Results data={data} />);
});
