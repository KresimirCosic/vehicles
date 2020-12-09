import { action, makeObservable, observable } from 'mobx';

import { RootStore } from './rootStore';

export class AuthenticationStore {
  rootStore;
  userName = '';

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      userName: observable,
      setUserName: action,
      removeUserName: action,
    });
    this.rootStore = rootStore;
  }

  setUserName(userName: string) {
    this.userName = userName;
  }

  removeUserName() {
    this.userName = '';
  }
}
