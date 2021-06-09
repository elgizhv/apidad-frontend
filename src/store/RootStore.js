import { createContext, useContext } from "react";
import { CategoryStore } from "./CategoryStore";
import { GeneralStore } from "./GeneralStore";
import { ModalStore } from "./ModalStore";
import { UserStore } from "./UserStore";

export class RootStore {
  generalStore = new GeneralStore(this);
  userStore = new UserStore(this);
  categoryStore = new CategoryStore(this);
  modalStore = new ModalStore(this);
}

export const RootStoreContext = createContext(new RootStore());

export const useStore = () => useContext(RootStoreContext);
