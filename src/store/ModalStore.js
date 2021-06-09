import { action, makeObservable, observable } from "mobx";

export class ModalStore {
  modal = null;

  open(modal) {
    this.modal = modal;
  }

  close() {
    this.modal = null;
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      modal: observable,
      open: action,
      close: action,
    });
  }
}
