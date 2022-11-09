// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import ContentLayout from '@cloudscape-design/components/content-layout';
import Grid from '@cloudscape-design/components/grid';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import HelpPanel from '@cloudscape-design/components/help-panel';

import Navigation from '../../components/navigation';
import Breadcrumbs from '../../components/breadcrumbs';
import Shell from '../../layouts/shell';

import ProductionOverview from './components/production-overview';
import Flavors from './components/flavors';
import QualityReport from './components/quality-report';

import { variationData, breakdownItems, productionMetrics, quote, notes } from './data';

export default function App() {
  return (
    <Shell
      breadcrumbs={<Breadcrumbs active={{ text: 'Dashboard', href: '/home/index.html' }} />}
      navigation={<Navigation />}
      tools={<HelpPanel header={<h2>Help panel</h2>} />}
    >
      <ContentLayout
        header={
          <Header variant="h1" info={<Link variant="info">Info</Link>}>
            Dashboard
          </Header>
        }
      >
        <Grid gridDefinition={[{ colspan: 12 }, { colspan: 8 }, { colspan: 4 }]} disableGutters={false}>
          <ProductionOverview metrics={productionMetrics} />
          <Flavors data={variationData} items={breakdownItems} />
          <QualityReport quote={quote} notes={notes} />
        </Grid>
      </ContentLayout>
    </Shell>
  );
}
