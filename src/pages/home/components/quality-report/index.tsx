// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Modal from '@cloudscape-design/components/modal';
import Table, { TableProps } from '@cloudscape-design/components/table';

const columnDefinitions: TableProps['columnDefinitions'] = [
  { header: 'Name', cell: ({ name }) => name },
  { header: 'Strong', cell: ({ strong }) => strong },
  { header: 'Mild', cell: ({ mild }) => mild },
  { header: 'Unnoticed', cell: ({ unnoticed }) => unnoticed },
];

export interface QualityReportProps {
  quote: string;
  notes: TableProps['items'];
}

export default function QualityReport({ quote, notes }: QualityReportProps) {
  const [showTastingNotes, setShowTastingNotes] = useState(false);

  return (
    <Container header={<Header variant="h2">Quality report</Header>}>
      <Box variant="p">Report from latest tasting:</Box>
      <Box color="text-body-secondary">{quote}</Box>
      <Button variant="normal" onClick={() => setShowTastingNotes(true)}>
        View tasting notes
      </Button>
      {showTastingNotes ? (
        <Modal visible={true} onDismiss={() => setShowTastingNotes(false)} header="Tasting notes">
          <Table sortingColumn={columnDefinitions[0]} items={notes} columnDefinitions={columnDefinitions} />
        </Modal>
      ) : null}
    </Container>
  );
}
