import { RootStore } from './rootStore';

export class UserInterfaceStore {
  rootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
