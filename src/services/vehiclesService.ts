import { rootStore } from '../mobx/stores/rootStore';

export class VehiclesService {
  createMake(name: string, abrv: string) {
    rootStore.vehiclesStore.addMake(name, abrv);
  }

  editMake(ID: number, name: string, abrv: string) {
    rootStore.vehiclesStore.editMake(ID, name, abrv);
  }

  deleteMake(ID: number) {
    rootStore.vehiclesStore.removeMake(ID);
  }

  createModel(name: string, makeID: number, price: number) {
    rootStore.vehiclesStore.addModel(name, makeID, price);
  }

  editModel(ID: number, name: string, price: number) {
    rootStore.vehiclesStore.editModel(ID, name, price);
  }

  deleteModel(ID: number) {
    rootStore.vehiclesStore.removeModel(ID);
  }
}

export const vehiclesService = new VehiclesService();
