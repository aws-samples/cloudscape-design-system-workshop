// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useState } from 'react';

import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
import HelpPanel from '@cloudscape-design/components/help-panel';
import SpaceBetween from '@cloudscape-design/components/space-between';

import Breadcrumbs from '../../components/breadcrumbs';
import Ingredients from './components/ingredients';
import Marketing from './components/marketing';
import Navigation from '../../components/navigation';
import Shape from './components/shape';
import ShellLayout from '../../layouts/shell';
import { FormContext } from './validation/form-context';
import { ContentLayout } from '@cloudscape-design/components';

export default function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  return (
    <ShellLayout
      contentType="form"
      breadcrumbs={<Breadcrumbs active={{ text: 'Create flavor', href: '/create-flavor/index.html' }} />}
      navigation={<Navigation />}
      tools={<HelpPanel header={<h2>Help panel</h2>} />}
    >
      <ContentLayout
        header={
          <Header
            variant="h1"
            description="Create a new flavor by specifying ingredients, quality, and price. On creation a flavor will be tested by the product and marketing team."
          >
            Create flavor
          </Header>
        }
      >
        <SpaceBetween size="m">
          <FormContext.Provider value={{ isFormSubmitted: isFormSubmitted }}>
            <form
              onSubmit={event => {
                setIsFormSubmitted(true);
                event.preventDefault();
              }}
            >
              <Form
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button href="/flavors/index.html" variant="link">
                      Cancel
                    </Button>
                    <Button formAction="submit" variant="primary">
                      Create flavor
                    </Button>
                  </SpaceBetween>
                }
              >
                <SpaceBetween size="l">
                  <Shape />
                  <Ingredients />
                  <Marketing />
                </SpaceBetween>
              </Form>
            </form>
          </FormContext.Provider>
        </SpaceBetween>
      </ContentLayout>
    </ShellLayout>
  );
}
