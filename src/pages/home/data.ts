// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
export const variationData = [
  { title: 'White Raspberry', value: 14 },
  { title: 'Dark Hazelnut', value: 32 },
  { title: 'Milk Chocolate', value: 25 },
  { title: 'Extra Dark', value: 49 },
];

export const breakdownItems = [
  {
    name: 'Dark Hazelnut',
    status: { type: 'success', message: 'Nominal' },
    molding: 14,
    mixing: 15,
  },
  {
    name: 'Extra Dark',
    status: { type: 'success', message: 'Nominal' },
    molding: 40,
    mixing: 42,
  },
  {
    name: 'Milk Chocolate',
    status: { type: 'success', message: 'Nominal' },
    molding: 12,
    mixing: 14,
  },
  {
    name: 'White Raspberry',
    status: { type: 'success', message: 'Nominal' },
    molding: 6,
    mixing: 6,
  },
];

export const productionMetrics = [
  { key: 'Bars per hour', value: '124k' },
  { key: 'Active molders', value: '12' },
  { key: 'Andon chord (last 24h)', value: '0' },
  { key: 'Trucks loading', value: '2' },
];

export const quote = `The tasting on ${new Intl.DateTimeFormat('en-US').format(
  new Date()
)} among engineers and designers in London showed very positive reactions to the quality of the products. Participants tasted in average 2.3 samples from 4 different flavors. Tasting notes included fruity, and floral. The average net promoter score was 9.2.`;
export const notes = [
  { name: 'cherry', strong: 1, mild: 5, unnoticed: 14 },
  { name: 'raspberry', strong: 2, mild: 9, unnoticed: 9 },
  { name: 'rose', strong: 2, mild: 3, unnoticed: 15 },
  { name: 'strawberry', strong: 3, mild: 5, unnoticed: 12 },
];
