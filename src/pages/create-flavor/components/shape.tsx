// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useState } from 'react';
import Container from '@cloudscape-design/components/container';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Tiles from '@cloudscape-design/components/tiles';

export default function Shape() {
  const [shape, setShape] = useState('bar');

  return (
    <Container header={<Header variant="h2">Chocolate shape</Header>}>
      <FormField label="Shape" stretch={true}>
        <Tiles
          items={[
            {
              value: 'bar',
              label: 'Bar',
              description: 'Traditional bar-shaped chocolate',
            },
            {
              value: 'praline',
              label: 'Pralines',
              description: 'Sophisticated and premium-looking chocolate shape',
            },
          ]}
          value={shape}
          onChange={e => setShape(e.detail.value)}
        />
      </FormField>
    </Container>
  );
}
