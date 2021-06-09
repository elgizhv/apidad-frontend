import { action, makeObservable, observable } from "mobx";
import { getCategories } from "../graphql/actions/category.action";

export class CategoryStore {
  categories = [];

  async fetchCategories() {
    this.categories = await getCategories();
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      categories: observable,
      fetchCategories: action,
    });
  }
}
