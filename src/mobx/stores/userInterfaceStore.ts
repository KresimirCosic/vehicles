import { action, makeObservable, observable, runInAction } from 'mobx';

import { RootStore } from './rootStore';
import { scaleInDuration } from '../../constants/durations';

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
    setTimeout(() => {
      runInAction(() => {
        this.loader = false;
      });
    }, scaleInDuration * 10);
  }
}
