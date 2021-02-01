import firebase from 'firebase';

import { rootStore } from '../mobx/stores/rootStore';
import { MakeDataResponse, ModelDataResponse } from '../constants/firebase';

export class VehiclesService {
  getMakes() {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .get()
      .then((response) => {
        vehiclesStore.completeMakesInitialFetch();

        response.forEach((doc) => {
          const { id } = doc;
          const { name, abrv } = doc.data() as MakeDataResponse;
          vehiclesStore.addMake(id, name, abrv);
        });

        userInterfaceStore.turnLoaderOff();
      });
  }

  createMake(name: string, abrv: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .add({
        name,
        abrv,
      })
      .then((response) => {
        const { id } = response;
        vehiclesStore.addMake(id, name, abrv);
        userInterfaceStore.turnLoaderOff();
      });
  }

  editMake(ID: string, name: string, abrv: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .update({
        name,
        abrv,
      })
      .then(() => {
        vehiclesStore.editMake(ID, name, abrv);
        userInterfaceStore.turnLoaderOff();
      });
  }

  deleteMake(ID: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .delete()
      .then(() => {
        firebase
          .firestore()
          .collection('models')
          .where('makeID', '==', ID)
          .get()
          .then((querySnapshot) => {
            const batch = firebase.firestore().batch();

            querySnapshot.forEach((doc) => batch.delete(doc.ref));

            return batch.commit();
          })
          .then(() => {
            vehiclesStore.removeMake(ID);
            userInterfaceStore.turnLoaderOff();
          });
      });
  }

  getModels() {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('models')
      .get()
      .then((response) => {
        vehiclesStore.completeModelsInitalFetch();

        response.forEach((doc) => {
          const { id } = doc;
          const { name, makeID, price } = doc.data() as ModelDataResponse;
          vehiclesStore.addModel(id, name, makeID, price);
        });

        userInterfaceStore.turnLoaderOff();
      });
  }

  createModel(name: string, makeID: string, price: number) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

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
        vehiclesStore.addModel(id, name, makeID, price);
        userInterfaceStore.turnLoaderOff();
      });
  }

  editModel(ID: string, name: string, price: number) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .update({
        name,
        price,
      })
      .then(() => {
        vehiclesStore.editModel(ID, name, price);
        userInterfaceStore.turnLoaderOff();
      });
  }

  deleteModel(ID: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .delete()
      .then(() => {
        vehiclesStore.removeModel(ID);
        userInterfaceStore.turnLoaderOff();
      });
  }
}

export const vehiclesService = new VehiclesService();
