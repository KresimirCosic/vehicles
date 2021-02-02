import { action, makeObservable, observable } from 'mobx';

import { RootStore } from './rootStore';

export interface VehicleMake {
  ID: string;
  name: string;
  abrv: string;
}

export interface VehicleModel {
  ID: string;
  name: string;
  makeID: string;
  price: number;
}

export class VehiclesStore {
  rootStore;
  initialMakesFetchComplete = false;
  initialModelsFetchComplete = false;
  makes: VehicleMake[] = [];
  models: VehicleModel[] = [];

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      makes: observable,
      models: observable,
      addMake: action,
      editMake: action,
      removeAllModelsOfMake: action,
      removeMake: action,
      addModel: action,
      editModel: action,
      removeModel: action,
    });
    this.rootStore = rootStore;
  }

  completeMakesInitialFetch() {
    this.initialMakesFetchComplete = true;
  }

  completeModelsInitalFetch() {
    this.initialModelsFetchComplete = true;
  }

  addMake(ID: string, name: string, abrv: string) {
    this.makes.push({ ID, name, abrv });
  }

  editMake(ID: string, name: string, abrv: string) {
    const index = this.makes.findIndex((make) => make.ID === ID);
    if (index >= 0) {
      this.makes[index] = {
        ID,
        name,
        abrv,
      };
    }
  }

  removeAllModelsOfMake(ID: string) {
    const newModelsList = this.models.filter((model) => model.makeID !== ID);
    this.models = [...newModelsList];
  }

  removeMake(ID: string) {
    this.removeAllModelsOfMake(ID);
    const index = this.makes.findIndex((make) => make.ID === ID);
    if (index >= 0) this.makes.splice(index, 1);
  }

  addModel(ID: string, name: string, makeID: string, price: number) {
    this.models.push({
      ID,
      name,
      makeID,
      price,
    });
  }

  editModel(ID: string, name: string, price: number) {
    const index = this.models.findIndex((model) => model.ID === ID);
    this.models[index] = {
      ...this.models[index],
      name,
      price,
    };
  }

  removeModel(ID: string) {
    const index = this.models.findIndex((model) => model.ID === ID);
    if (index >= 0) this.models.splice(index, 1);
  }
}
