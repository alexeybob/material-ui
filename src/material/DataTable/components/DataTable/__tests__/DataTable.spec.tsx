import React from 'react';
import { screen } from '@testing-library/react';
import DataTable from 'material/DataTable/components/DataTable';
import { renderWithProvider } from 'material/DataTable/utils/testUtils';

describe('<DataTable />', () => {
  beforeEach(() => {
    renderWithProvider(<DataTable />);
  });

  it('Component should contains table element', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
