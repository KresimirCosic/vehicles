import { RootStore } from './rootStore';

export class AuthenticationStore {
  rootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
