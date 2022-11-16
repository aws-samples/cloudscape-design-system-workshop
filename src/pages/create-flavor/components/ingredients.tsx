// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useState } from 'react';
import Container from '@cloudscape-design/components/container';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Multiselect, { MultiselectProps } from '@cloudscape-design/components/multiselect';
import RadioGroup from '@cloudscape-design/components/radio-group';
import SpaceBetween from '@cloudscape-design/components/space-between';

import { fruits, chocolate } from '../../flavors/data';
import { FormContext } from '../validation/form-context';

const options = [...fruits, ...chocolate].map(i => ({ value: i, label: i }));

export default function Ingredients() {
  const [organic, setOrganic] = useState('yes');
  const [selectedIngredients, setSelectedIngredients] = useState<MultiselectProps['selectedOptions']>([]);
  return (
    <FormContext.Consumer>
      {({ isFormSubmitted }) => (
        <Container header={<Header variant="h2">Ingredients</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <FormField
              label="List of ingredients"
              errorText={isFormSubmitted && selectedIngredients.length === 0 && 'List of ingredients is required.'}
            >
              <Multiselect
                placeholder="Select all ingredients"
                selectedOptions={selectedIngredients}
                onChange={({ detail }) => setSelectedIngredients(detail.selectedOptions)}
                options={options}
              />
            </FormField>
            <FormField label="Organic">
              <RadioGroup
                value={organic}
                onChange={({ detail }) => setOrganic(detail.value)}
                items={[
                  { value: 'no', label: 'No' },
                  { value: 'yes', label: 'Yes' },
                ]}
              />
            </FormField>
          </SpaceBetween>
        </Container>
      )}
    </FormContext.Consumer>
  );
}
