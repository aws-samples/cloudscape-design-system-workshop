// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Textarea from '@cloudscape-design/components/textarea';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { useState } from 'react';
import { BasicValidationContext } from '../validation/basic-validation';

export default function Marketing() {
  const [wholeSalePrice, setWholeSalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const isEmptyString = (value: string) => !value?.length;

  return (
    <BasicValidationContext.Consumer>
      {({ isFormSubmitted, addErrorField }) => {
        const wholeSalePriceErrorText = isEmptyString(wholeSalePrice) && 'Wholesale price is required.';
        const retailPriceErrorText = isEmptyString(retailPrice) && 'Retail price is required.';

        return (
          <Container header={<Header variant="h2">Marketing</Header>}>
            <FormField label="Prices" description="Define the prices for wholesale and retail.">
              <SpaceBetween direction="vertical" size="l">
                <ColumnLayout columns={2}>
                  <FormField
                    label="Wholesale price"
                    stretch={true}
                    errorText={isFormSubmitted && wholeSalePriceErrorText}
                    i18nStrings={{
                      errorIconAriaLabel: 'Error',
                    }}
                  >
                    <Input
                      value={wholeSalePrice}
                      onChange={({ detail }) => setWholeSalePrice(detail.value)}
                      type="number"
                      ref={ref => {
                        addErrorField('wholeSalePrice', { isValid: !wholeSalePriceErrorText, ref });
                      }}
                    />
                  </FormField>
                  <FormField
                    label="Retail price"
                    stretch={true}
                    errorText={isFormSubmitted && retailPriceErrorText}
                    i18nStrings={{
                      errorIconAriaLabel: 'Error',
                    }}
                  >
                    <Input
                      value={retailPrice}
                      onChange={({ detail }) => setRetailPrice(detail.value)}
                      type="number"
                      ref={ref => {
                        addErrorField('retailPrice', { isValid: !retailPriceErrorText, ref });
                      }}
                    />
                  </FormField>
                </ColumnLayout>
                <FormField
                  label={
                    <>
                      Additional notes<i> - optional</i>
                    </>
                  }
                  stretch={true}
                >
                  <Textarea onChange={({ detail }) => setAdditionalNotes(detail.value)} value={additionalNotes} />
                </FormField>
              </SpaceBetween>
            </FormField>
          </Container>
        );
      }}
    </BasicValidationContext.Consumer>
  );
}
