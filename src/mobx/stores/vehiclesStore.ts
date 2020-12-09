import { RootStore } from './rootStore';

export class VehiclesStore {
  rootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
