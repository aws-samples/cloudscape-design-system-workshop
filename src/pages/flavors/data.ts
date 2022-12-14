// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
export interface Flavor {
  name: string;
  sold: number;
  produced: number;
  estimated: number;
  retailPrice: number;
  totalRevenue: number;
  totalCost: number;
}

export const chocolate = ['White', 'Dark', 'Milk', 'Extra Dark', 'Pink'];
export const fruits = [
  'Apple',
  'Blackberry',
  'Cherry',
  'Date',
  'Fig',
  'Lemon',
  'Honey Melon',
  'Melon',
  'Strawberry',
  'Raspberry',
  'Rose',
];

export const variationsData: Flavor[] = [
  {
    name: 'Extra Dark Lemon Bar',
    sold: 9450,
    produced: 7146,
    estimated: 11880,
    retailPrice: 2.99,
    totalRevenue: 1781.37,
    totalCost: 6.73,
  },
  {
    name: 'Pink Lemon Bar',
    sold: 5513,
    produced: 13837,
    estimated: 12331,
    retailPrice: 2.99,
    totalRevenue: 6281.66,
    totalCost: 78.19,
  },
  {
    name: 'Extra Dark Honey Melon Pralines',
    sold: 4036,
    produced: 10490,
    estimated: 9434,
    retailPrice: 1.99,
    totalRevenue: 6986.5,
    totalCost: 978.59,
  },
  {
    name: 'Milk Raspberry Bar',
    sold: 9768,
    produced: 10197,
    estimated: 5613,
    retailPrice: 2.99,
    totalRevenue: 17202.02,
    totalCost: 322.26,
  },
  {
    name: 'White Melon Bar',
    sold: 7527,
    produced: 14233,
    estimated: 6727,
    retailPrice: 0.99,
    totalRevenue: 31592.13,
    totalCost: 514.92,
  },
  {
    name: 'White Date Pralines',
    sold: 4509,
    produced: 10513,
    estimated: 4578,
    retailPrice: 1.99,
    totalRevenue: 5891.99,
    totalCost: 424.93,
  },
  {
    name: 'Dark Blackberry Bar',
    sold: 3296,
    produced: 1934,
    estimated: 3173,
    retailPrice: 0.99,
    totalRevenue: 27034.88,
    totalCost: 1806.96,
  },
  {
    name: 'Dark Blackberry Pralines',
    sold: 2559,
    produced: 9499,
    estimated: 7954,
    retailPrice: 0.99,
    totalRevenue: 10936.04,
    totalCost: 2041.09,
  },
  {
    name: 'Extra Dark Melon Pralines',
    sold: 4616,
    produced: 2395,
    estimated: 4014,
    retailPrice: 1.99,
    totalRevenue: 43675.3,
    totalCost: 665.83,
  },
  {
    name: 'Dark Raspberry Bar',
    sold: 9914,
    produced: 10109,
    estimated: 1980,
    retailPrice: 1.99,
    totalRevenue: 5299.14,
    totalCost: 126.45,
  },
  {
    name: 'Pink Date Pralines',
    sold: 5019,
    produced: 12225,
    estimated: 11248,
    retailPrice: 2.99,
    totalRevenue: 16141.79,
    totalCost: 1468.04,
  },
  {
    name: 'Milk Fig Bar',
    sold: 5090,
    produced: 13492,
    estimated: 5789,
    retailPrice: 0.99,
    totalRevenue: 6700.76,
    totalCost: 1915.13,
  },
  {
    name: 'White Strawberry Pralines',
    sold: 4627,
    produced: 11155,
    estimated: 9781,
    retailPrice: 2.99,
    totalRevenue: 1168.56,
    totalCost: 1510.27,
  },
  {
    name: 'Dark Apple Pralines',
    sold: 5121,
    produced: 14286,
    estimated: 11806,
    retailPrice: 1.99,
    totalRevenue: 40765.03,
    totalCost: 1308.77,
  },
  {
    name: 'Extra Dark Strawberry Pralines',
    sold: 2154,
    produced: 5215,
    estimated: 4697,
    retailPrice: 2.99,
    totalRevenue: 11788.8,
    totalCost: 1868.4,
  },
  {
    name: 'Milk Rose Pralines',
    sold: 2307,
    produced: 4615,
    estimated: 3307,
    retailPrice: 1.99,
    totalRevenue: 32277.07,
    totalCost: 1130.71,
  },
  {
    name: 'Milk Strawberry Pralines',
    sold: 11976,
    produced: 10153,
    estimated: 12128,
    retailPrice: 2.99,
    totalRevenue: 6242.17,
    totalCost: 1845.49,
  },
  {
    name: 'Pink Fig Pralines',
    sold: 6435,
    produced: 12344,
    estimated: 12408,
    retailPrice: 1.99,
    totalRevenue: 3081.22,
    totalCost: 700.7,
  },
  {
    name: 'Pink Apple Bar',
    sold: 11642,
    produced: 3206,
    estimated: 6184,
    retailPrice: 2.99,
    totalRevenue: 9270.33,
    totalCost: 1781.76,
  },
  {
    name: 'White Apple Bar',
    sold: 2695,
    produced: 854,
    estimated: 11430,
    retailPrice: 2.99,
    totalRevenue: 15250.17,
    totalCost: 1483.95,
  },
  {
    name: 'Milk Rose Bar',
    sold: 8350,
    produced: 1605,
    estimated: 1577,
    retailPrice: 0.99,
    totalRevenue: 1251.37,
    totalCost: 2043.43,
  },
  {
    name: 'Dark Strawberry Pralines',
    sold: 637,
    produced: 2924,
    estimated: 11470,
    retailPrice: 1.99,
    totalRevenue: 5897.18,
    totalCost: 1534,
  },
  {
    name: 'Milk Melon Bar',
    sold: 11263,
    produced: 8585,
    estimated: 7334,
    retailPrice: 1.99,
    totalRevenue: 21019.77,
    totalCost: 1583.95,
  },
  {
    name: 'Milk Fig Pralines',
    sold: 11130,
    produced: 8125,
    estimated: 12641,
    retailPrice: 0.99,
    totalRevenue: 43401.47,
    totalCost: 201.27,
  },
  {
    name: 'Milk Cherry Pralines',
    sold: 7938,
    produced: 13955,
    estimated: 12601,
    retailPrice: 0.99,
    totalRevenue: 14416.99,
    totalCost: 1328.77,
  },
  {
    name: 'Dark Date Pralines',
    sold: 4408,
    produced: 5708,
    estimated: 7808,
    retailPrice: 1.99,
    totalRevenue: 19912.42,
    totalCost: 1464.79,
  },
  {
    name: 'Dark Honey Melon Pralines',
    sold: 5427,
    produced: 14392,
    estimated: 12249,
    retailPrice: 2.99,
    totalRevenue: 34309.41,
    totalCost: 120.28,
  },
  {
    name: 'Milk Raspberry Pralines',
    sold: 4067,
    produced: 5670,
    estimated: 1367,
    retailPrice: 1.99,
    totalRevenue: 12627.57,
    totalCost: 910.89,
  },
  {
    name: 'White Apple Pralines',
    sold: 11706,
    produced: 1834,
    estimated: 129,
    retailPrice: 1.99,
    totalRevenue: 41628.24,
    totalCost: 1033.72,
  },
  {
    name: 'Extra Dark Rose Pralines',
    sold: 3120,
    produced: 8205,
    estimated: 6014,
    retailPrice: 2.99,
    totalRevenue: 37583.26,
    totalCost: 346.98,
  },
  {
    name: 'Pink Honey Melon Bar',
    sold: 9560,
    produced: 11714,
    estimated: 4850,
    retailPrice: 0.99,
    totalRevenue: 38907.83,
    totalCost: 354.42,
  },
  {
    name: 'Milk Cherry Bar',
    sold: 7473,
    produced: 12782,
    estimated: 510,
    retailPrice: 1.99,
    totalRevenue: 9948.93,
    totalCost: 233.8,
  },
  {
    name: 'Dark Raspberry Pralines',
    sold: 4635,
    produced: 7935,
    estimated: 11289,
    retailPrice: 1.99,
    totalRevenue: 21025.17,
    totalCost: 1771.44,
  },
  {
    name: 'Milk Strawberry Bar',
    sold: 9459,
    produced: 1406,
    estimated: 11247,
    retailPrice: 0.99,
    totalRevenue: 8846.69,
    totalCost: 1889.52,
  },
  {
    name: 'Dark Apple Bar',
    sold: 5679,
    produced: 4735,
    estimated: 1922,
    retailPrice: 2.99,
    totalRevenue: 5967.91,
    totalCost: 1448.64,
  },
  {
    name: 'Pink Raspberry Pralines',
    sold: 6659,
    produced: 397,
    estimated: 2514,
    retailPrice: 0.99,
    totalRevenue: 39561.41,
    totalCost: 338.5,
  },
  {
    name: 'Pink Cherry Pralines',
    sold: 6900,
    produced: 11078,
    estimated: 9190,
    retailPrice: 2.99,
    totalRevenue: 4047.63,
    totalCost: 882.23,
  },
  {
    name: 'Milk Honey Melon Pralines',
    sold: 3860,
    produced: 6559,
    estimated: 7012,
    retailPrice: 0.99,
    totalRevenue: 23369.73,
    totalCost: 334.74,
  },
  {
    name: 'Extra Dark Raspberry Bar',
    sold: 174,
    produced: 98,
    estimated: 11325,
    retailPrice: 2.99,
    totalRevenue: 38637.91,
    totalCost: 186.52,
  },
  {
    name: 'White Raspberry Bar',
    sold: 6560,
    produced: 9002,
    estimated: 1784,
    retailPrice: 1.99,
    totalRevenue: 33094,
    totalCost: 1596.57,
  },
  {
    name: 'Extra Dark Cherry Pralines',
    sold: 10298,
    produced: 10748,
    estimated: 10993,
    retailPrice: 1.99,
    totalRevenue: 5905.45,
    totalCost: 693.66,
  },
  {
    name: 'Extra Dark Cherry Bar',
    sold: 8004,
    produced: 11292,
    estimated: 11965,
    retailPrice: 2.99,
    totalRevenue: 39066.54,
    totalCost: 903.12,
  },
  {
    name: 'Dark Lemon Bar',
    sold: 8141,
    produced: 11681,
    estimated: 9171,
    retailPrice: 2.99,
    totalRevenue: 36826.81,
    totalCost: 2054.77,
  },
  {
    name: 'Dark Lemon Pralines',
    sold: 1201,
    produced: 4209,
    estimated: 9674,
    retailPrice: 2.99,
    totalRevenue: 30703.18,
    totalCost: 332.15,
  },
  {
    name: 'Pink Rose Bar',
    sold: 2135,
    produced: 5958,
    estimated: 6015,
    retailPrice: 2.99,
    totalRevenue: 23271.67,
    totalCost: 1606.1,
  },
  {
    name: 'Pink Rose Pralines',
    sold: 7615,
    produced: 926,
    estimated: 3834,
    retailPrice: 0.99,
    totalRevenue: 14067.9,
    totalCost: 1764.51,
  },
  {
    name: 'White Fig Bar',
    sold: 5503,
    produced: 12241,
    estimated: 2058,
    retailPrice: 0.99,
    totalRevenue: 13707.91,
    totalCost: 1990.54,
  },
  {
    name: 'White Rose Pralines',
    sold: 4984,
    produced: 319,
    estimated: 5702,
    retailPrice: 0.99,
    totalRevenue: 42355.24,
    totalCost: 1917,
  },
  {
    name: 'White Melon Pralines',
    sold: 5376,
    produced: 13971,
    estimated: 11198,
    retailPrice: 1.99,
    totalRevenue: 40461.08,
    totalCost: 2042.7,
  },
  {
    name: 'Pink Strawberry Bar',
    sold: 4644,
    produced: 10386,
    estimated: 3359,
    retailPrice: 2.99,
    totalRevenue: 13829.54,
    totalCost: 444.39,
  },
  {
    name: 'Milk Blackberry Bar',
    sold: 11708,
    produced: 8933,
    estimated: 1933,
    retailPrice: 1.99,
    totalRevenue: 35471.1,
    totalCost: 516.55,
  },
  {
    name: 'Milk Lemon Pralines',
    sold: 4408,
    produced: 3125,
    estimated: 2322,
    retailPrice: 0.99,
    totalRevenue: 525.76,
    totalCost: 211.51,
  },
  {
    name: 'White Rose Bar',
    sold: 4427,
    produced: 11786,
    estimated: 3464,
    retailPrice: 1.99,
    totalRevenue: 15351.68,
    totalCost: 1182.86,
  },
  {
    name: 'Extra Dark Date Pralines',
    sold: 9951,
    produced: 5916,
    estimated: 11157,
    retailPrice: 0.99,
    totalRevenue: 62.59,
    totalCost: 920.62,
  },
  {
    name: 'Milk Honey Melon Bar',
    sold: 6083,
    produced: 4540,
    estimated: 9009,
    retailPrice: 1.99,
    totalRevenue: 32529.1,
    totalCost: 299.42,
  },
  {
    name: 'White Fig Pralines',
    sold: 11522,
    produced: 13095,
    estimated: 10434,
    retailPrice: 1.99,
    totalRevenue: 35013.31,
    totalCost: 857.13,
  },
];
