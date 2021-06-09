import { useQuery } from "@apollo/client";
import { client } from "../../context/ApolloContext";
import {
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
} from "../queries/product.query";

export const getCategoryProducts = async (id) => {
  try {
    const { data: { products } = {} } = await client.query({
      query: GET_PRODUCTS_BY_CATEGORY,
      variables: {
        id,
      },
    });
    return products;
  } catch {
    return false;
  }
};
export const useCategoryProducts = (options) =>
  useQuery(GET_PRODUCTS_BY_CATEGORY, options);

export const useProduct = (options) => useQuery(GET_PRODUCT, options);
