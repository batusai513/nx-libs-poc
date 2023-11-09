import { render } from '@testing-library/react';

import LibY from './lib-y';

describe('LibY', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibY />);
    expect(baseElement).toBeTruthy();
  });
});
