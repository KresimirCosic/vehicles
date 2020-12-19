import { action, makeObservable, observable } from 'mobx';

import { RootStore } from './rootStore';

interface User {
  ID: number;
  username: string;
  password: string;
  admin: boolean;
}

const initialUserState: User[] = [
  { ID: 1, username: 'admin', password: 'deus', admin: true },
  { ID: 2, username: 'user', password: 'mortale', admin: false },
];

export class AuthenticationStore {
  rootStore;
  availableUsers = initialUserState;
  user: User | undefined;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      user: observable,
      setUser: action,
      removeUser: action,
      registerUser: action,
    });
    this.rootStore = rootStore;
  }

  setUser(username: string, password: string) {
    const index = this.availableUsers.findIndex(
      (user) => user.username === username
    );
    if (
      index >= 0 &&
      this.availableUsers[index].username === username &&
      this.availableUsers[index].password === password
    )
      this.user = { ...this.availableUsers[index] };
  }

  removeUser() {
    this.user = undefined;
  }

  registerUser(username: string, password: string, admin: boolean) {
    let currentLargestUserID = Math.max(
      ...this.availableUsers.map((user) => user.ID)
    );
    if (!currentLargestUserID) currentLargestUserID = 0;
    this.availableUsers.push({
      ID: currentLargestUserID + 1,
      username,
      password,
      admin,
    });
  }
}
