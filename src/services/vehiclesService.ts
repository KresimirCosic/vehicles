import firebase from 'firebase';

import { rootStore } from '../mobx/stores/rootStore';
// import { MakeDataResponse, ModelDataResponse } from '../constants/firebase';

export class VehiclesService {
  createMake(name: string, abrv: string) {
    firebase
      .firestore()
      .collection('makes')
      .add({
        name,
        abrv,
      })
      .then((response) => {
        const { id } = response;
        rootStore.vehiclesStore.addMake(id, name, abrv);
      });
  }

  editMake(ID: string, name: string, abrv: string) {
    // rootStore.vehiclesStore.editMake(ID, name, abrv);
  }

  deleteMake(ID: string) {
    // rootStore.vehiclesStore.removeMake(ID);
  }

  createModel(name: string, makeID: string, price: number) {
    // rootStore.vehiclesStore.addModel(name, makeID, price);
  }

  editModel(ID: string, name: string, price: number) {
    // rootStore.vehiclesStore.editModel(ID, name, price);
  }

  deleteModel(ID: string) {
    // rootStore.vehiclesStore.removeModel(ID);
  }
}

export const vehiclesService = new VehiclesService();
