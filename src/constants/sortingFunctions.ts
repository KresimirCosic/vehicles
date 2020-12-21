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

export type SortingFunctionName = keyof typeof sortingFunctions;
