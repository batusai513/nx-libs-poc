import { render } from '@testing-library/react';

import LibX from './lib-x';

describe('LibX', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibX />);
    expect(baseElement).toBeTruthy();
  });
});
