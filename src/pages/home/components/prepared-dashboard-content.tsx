// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import SpaceBetween from '@cloudscape-design/components/space-between';
import Grid from '@cloudscape-design/components/grid';
import ProductionOverview from './production-overview';
import Flavors from './flavors';
import QualityReport from './quality-report';
import { breakdownItems, notes, productionMetrics, quote, variationData } from '../data';

export default function PreparedDashboardContent() {
  return (
    <SpaceBetween size="m">
      <Grid gridDefinition={[{ colspan: 12 }, { colspan: 8 }, { colspan: 4 }]} disableGutters={false}>
        <ProductionOverview metrics={productionMetrics} />
        <Flavors data={variationData} items={breakdownItems} />
        <QualityReport quote={quote} notes={notes} />
      </Grid>
    </SpaceBetween>
  );
}
