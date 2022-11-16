// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import HelpPanel from '@cloudscape-design/components/help-panel';

import Breadcrumbs from '../../components/breadcrumbs';
import Navigation from '../../components/navigation';
import ShellLayout from '../../layouts/shell';
import VariationsTable from './components/flavors-table';

import { variationsData } from './data';

export default function App() {
  return (
    <ShellLayout
      contentType="table"
      breadcrumbs={<Breadcrumbs active={{ text: 'Flavors', href: '/flavors/index.html' }} />}
      navigation={<Navigation />}
      tools={<HelpPanel header={<h2>Help Panel</h2>}></HelpPanel>}
    >
      <VariationsTable flavors={variationsData} />
    </ShellLayout>
  );
}
