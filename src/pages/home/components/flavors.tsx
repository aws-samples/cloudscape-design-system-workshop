// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import PieChart, { PieChartProps } from '@cloudscape-design/components/pie-chart';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import Table, { TableProps } from '@cloudscape-design/components/table';
import { SpaceBetween } from '@cloudscape-design/components';

const columnDefinitions: TableProps['columnDefinitions'] = [
  { header: 'Name', cell: ({ name }) => name },
  {
    header: 'Status',
    cell: ({ status }) => <StatusIndicator type={status.type}>{status.message}</StatusIndicator>,
  },
  { header: 'Mixing (kg/h)', cell: ({ mixing }) => mixing },
  { header: 'Molding (kg/h)', cell: ({ molding }) => molding },
];

export interface VariationsProps {
  data: PieChartProps['data'];
  items: TableProps['items'];
}

export default function Flavors({ data, items }: VariationsProps) {
  return (
    <SpaceBetween size={'l'}>
      <Container header={<Header variant="h2">Flavors (last 24h)</Header>}>
        <PieChart data={data} hideFilter={true} i18nStrings={{
          chartAriaRoleDescription: 'Pie chart',
          detailPopoverDismissAriaLabel: 'Dismiss',
          legendAriaLabel: 'Legend',
          filterSelectedAriaLabel: 'filterSelectedAriaLabel',
          segmentAriaRoleDescription: 'segment',
        }} />
      </Container>
      <Table
        sortingColumn={columnDefinitions[0]}
        header={<Header variant="h2">Details</Header>}
        items={items}
        columnDefinitions={columnDefinitions}
        ariaLabels={{
          tableLabel: 'Details table',
        }}
      />
    </SpaceBetween>
  );
}
