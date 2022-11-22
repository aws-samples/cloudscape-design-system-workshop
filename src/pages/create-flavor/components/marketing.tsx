// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import {
  ColumnLayout,
  Container,
  FormField,
  Header,
  Input,
  Textarea,
  SpaceBetween,
} from '@cloudscape-design/components';
import { useState } from 'react';
import { FormContext } from '../validation/form-context';

export default function Marketing() {
  const [wholeSalePrice, setWholeSalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const isEmptyString = (value: string) => !value?.length;

  return (
    <FormContext.Consumer>
      {({ isFormSubmitted }) => (
        <Container header={<Header variant="h2">Marketing</Header>}>
          <FormField label="Prices" description="Define the prices for wholesale and retail.">
            <SpaceBetween direction="vertical" size="l">
              <ColumnLayout columns={2}>
                <FormField
                  label="Wholesale price"
                  stretch={true}
                  errorText={isFormSubmitted && isEmptyString(wholeSalePrice) && 'Wholesale price is required.'}
                  i18nStrings={{
                    errorIconAriaLabel: 'Error'
                  }}
                >
                  <Input
                    value={wholeSalePrice}
                    onChange={({ detail }) => setWholeSalePrice(detail.value)}
                    type="number"
                  />
                </FormField>
                <FormField
                  label="Retail price"
                  stretch={true}
                  errorText={isFormSubmitted && isEmptyString(retailPrice) && 'Retail price is required.'}
                  i18nStrings={{
                    errorIconAriaLabel: 'Error'
                  }}
                >
                  <Input value={retailPrice} onChange={({ detail }) => setRetailPrice(detail.value)} type="number" />
                </FormField>
              </ColumnLayout>
              <FormField
                label={
                  <>
                    Aditional notes<i> - optional</i>
                  </>
                }
                stretch={true}
              >
                <Textarea onChange={({ detail }) => setAdditionalNotes(detail.value)} value={additionalNotes} />
              </FormField>
            </SpaceBetween>
          </FormField>
        </Container>
      )}
    </FormContext.Consumer>
  );
}
