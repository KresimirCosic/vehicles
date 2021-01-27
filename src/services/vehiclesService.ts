import firebase from 'firebase';

import { rootStore } from '../mobx/stores/rootStore';

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
    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .update({
        name,
        abrv,
      })
      .then(() => {
        rootStore.vehiclesStore.editMake(ID, name, abrv);
      });
  }

  deleteMake(ID: string) {
    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .delete()
      .then(() => {
        rootStore.vehiclesStore.removeMake(ID);
      });
    // To do
    // Delete all models from this make as well
  }

  createModel(name: string, makeID: string, price: number) {
    firebase
      .firestore()
      .collection('models')
      .add({
        name,
        makeID,
        price,
      })
      .then((response) => {
        const { id } = response;
        rootStore.vehiclesStore.addModel(id, name, makeID, price);
      });
  }

  editModel(ID: string, name: string, price: number) {
    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .update({
        name,
        price,
      })
      .then(() => {
        rootStore.vehiclesStore.editModel(ID, name, price);
      });
  }

  deleteModel(ID: string) {
    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .delete()
      .then(() => {
        rootStore.vehiclesStore.removeModel(ID);
      });
  }
}

export const vehiclesService = new VehiclesService();
