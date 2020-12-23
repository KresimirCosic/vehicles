import { rootStore } from '../mobx/stores/rootStore';

export class AuthenticationService {
  login(username: string, password: string) {
    rootStore.authenticationStore.setUser(username, password);
  }

  logout() {
    rootStore.authenticationStore.removeUser();
  }

  register(username: string, password: string, admin: boolean) {
    rootStore.authenticationStore.registerUser(username, password, admin);
  }
}

export const authenticationService = new AuthenticationService();
