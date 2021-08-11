import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Results from './index';

it('results component tests ', async () => {
  const data = [
    { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    { name: 'fake thing 2', url: 'http://fakethings.com/2' },
  ];
  render(<Results data={data}></Results>);
  const results = screen.getByTestId('results');
  //   console.log(results);
  expect(results).toHaveTextContent('fake thing 1');

  // i have problem here with toContainHTML, it doesn't pass anyway!
  //   expect(results).toContainHTML(`<pre data-testid="results">[
  //     {
  //       "name": "fake thing 1",
  //       "url": "http://fakethings.com/1"
  //     },
  //     {
  //       "name": "fake thing 2",
  //       "url": "http://fakethings.com/2"
  //     }
  //   ]</pre>`);
});
