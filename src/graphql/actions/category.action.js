import { useQuery } from "@apollo/client";
import { client } from "../../context/ApolloContext";
import { GET_CATEGORIES } from "../queries/category.query";

export const useCategories = (options = {}) =>
  useQuery(GET_CATEGORIES, options);

export const getCategories = async (options = {}) => {
  try {
    const { data: { categories } = {} } = await client.query({
      query: GET_CATEGORIES,
      ...options,
    });
    return categories;
  } catch {
    return false;
  }
};
