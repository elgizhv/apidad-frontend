import { makeObservable, observable, action } from "mobx";
import { getGeneral } from "../graphql/actions/general.action";

export class GeneralStore {
  data = null;
  async fetch() {
    this.data = await getGeneral();
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      data: observable,
      fetch: action,
    });
  }
}
