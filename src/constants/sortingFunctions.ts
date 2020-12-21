// export const sortingFunctions = {
//   sortByPriceIncreasing: (a: T, b: T) => {
//     if (a.price > b.price) return 1;
//     if (a.price < b.price) return -1;
//     return 0;
//   },
//   sortByPriceDecreasing: <T extends { price: number }>(a: T, b: T) => {
//     if (a.price > b.price) return -1;
//     if (a.price < b.price) return 1;
//     return 0;
//   },
//   sortByNameAlphabeticallyIncreasing: <T extends { name: string }>(
//     a: T,
//     b: T
//   ) => {
//     return ('' + a.name).localeCompare(b.name);
//   },
//   sortByNameAlphabeticallyDecreasing: <T extends { name: string }>(
//     a: T,
//     b: T
//   ) => {
//     return -1 * ('' + a.name).localeCompare(b.name);
//   },
// };

import { VehicleModel } from '../mobx/stores/vehiclesStore';

export const sortingFunctions = {
  sortByPriceIncreasing: (a: VehicleModel, b: VehicleModel) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  },
  sortByPriceDecreasing: (a: VehicleModel, b: VehicleModel) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
  sortByNameAlphabeticallyIncreasing: (a: VehicleModel, b: VehicleModel) => {
    return ('' + a.name).localeCompare(b.name);
  },
  sortByNameAlphabeticallyDecreasing: (a: VehicleModel, b: VehicleModel) => {
    return -1 * ('' + a.name).localeCompare(b.name);
  },
};
