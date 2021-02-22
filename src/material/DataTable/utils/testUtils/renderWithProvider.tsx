import React, { ReactElement } from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import DataTableProvider from '../../DataTableProvider';
import { columnsMock, dataMock } from './__mocks__/renderWithProviderMock';

const renderWithProvider = (
  Component: ReactElement,
  renderOptions = {}
): RenderResult => {
  return rtlRender(
    <DataTableProvider columns={columnsMock} data={dataMock}>
      {Component}
    </DataTableProvider>,
    renderOptions
  );
};

export default renderWithProvider;
