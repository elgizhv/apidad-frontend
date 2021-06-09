import axios from "axios";

export const getCategories = async (id) => {
  const { data } = await axios
    .get("http://localhost:3002/api/categories")
    .catch(() => false);
  return data;
};
