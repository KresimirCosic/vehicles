import { action, makeObservable, observable } from 'mobx';

import { RootStore } from './rootStore';

export class UserInterfaceStore {
  rootStore;
  loader = true;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      loader: observable,
      turnLoaderOn: action,
      turnLoaderOff: action,
    });
    this.rootStore = rootStore;
  }

  turnLoaderOn() {
    this.loader = true;
  }

  turnLoaderOff() {
    this.loader = false;
  }
}
