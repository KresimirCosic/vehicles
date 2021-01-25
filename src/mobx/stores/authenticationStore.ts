import { action, makeObservable, observable } from 'mobx';

import { RootStore } from './rootStore';

interface User {
  uid: string | null;
  email: string | null;
  admin: boolean | null;
}

export class AuthenticationStore {
  rootStore;
  user: User;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      user: observable,
      setUser: action,
      removeUser: action,
    });
    this.rootStore = rootStore;
    this.user = {
      uid: null,
      email: null,
      admin: null,
    };
  }

  setUser(uid: string, email: string | null, admin: boolean) {
    this.user = {
      uid,
      email,
      admin,
    };
  }

  removeUser() {
    this.user = {
      uid: null,
      email: null,
      admin: null,
    };
  }
}
