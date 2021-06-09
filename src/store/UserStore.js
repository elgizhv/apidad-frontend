import { makeObservable, observable, action } from "mobx";
import { getUser } from "../graphql/actions/user.action";

export class UserStore {
  user = null;

  async fetchUser() {
    let user = await getUser();
    this.setUser(user);
  }
  async setUser(user) {
    this.user = user;
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      user: observable,
      fetchUser: action,
      setUser: action,
    });
  }
}
