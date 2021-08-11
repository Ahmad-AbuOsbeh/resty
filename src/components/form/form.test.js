import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Form from './index';

it('form component tests ', async () => {
  // sohwLoading={sohwLoading} shwLoading={shwLoading}
  const sohwLoading = true;
  const shwLoading = jest.fn();

  const mockFunc = jest.fn();
  render(<Form handleApiCall={mockFunc} sohwLoading={sohwLoading} shwLoading={shwLoading} />);
  //   const submit = screen.getByTestId('submitButton');
  const submit = screen.getByText('GO!');

  // i have a problem here>> toBeInTheDocument not a function !
  //   expect(submit).toBeInTheDocument();
  fireEvent.click(submit);
  await waitFor(() => expect(mockFunc).toHaveBeenCalled());
});
