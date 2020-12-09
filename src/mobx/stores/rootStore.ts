import { UserInterfaceStore } from './userInterfaceStore';
import { VehiclesStore } from './vehiclesStore';
import { AuthenticationStore } from './authenticationStore';

export class RootStore {
  userInterfaceStore;
  vehiclesStore;
  authenticationStore;

  constructor() {
    this.userInterfaceStore = new UserInterfaceStore(this);
    this.vehiclesStore = new VehiclesStore(this);
    this.authenticationStore = new AuthenticationStore(this);
  }
}

export const rootStore = new RootStore();
