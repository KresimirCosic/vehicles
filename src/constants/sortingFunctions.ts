import { VehicleModel } from '../mobx/stores/vehiclesStore';

export const sortingFunctions = {
  sortByPriceIncreasing: {
    description: 'Price (lowest first)',
    function: (a: VehicleModel, b: VehicleModel) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    },
  },
  sortByPriceDecreasing: {
    description: 'Price (highest first)',
    function: (a: VehicleModel, b: VehicleModel) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    },
  },
  sortByNameAlphabeticallyIncreasing: {
    description: 'Alphabet',
    function: (a: VehicleModel, b: VehicleModel) => {
      return ('' + a.name).localeCompare(b.name);
    },
  },
  sortByNameAlphabeticallyDecreasing: {
    description: 'Alphabet (reverse)',
    function: (a: VehicleModel, b: VehicleModel) => {
      return -1 * ('' + a.name).localeCompare(b.name);
    },
  },
};

export type SortingFunctionName = keyof typeof sortingFunctions;
