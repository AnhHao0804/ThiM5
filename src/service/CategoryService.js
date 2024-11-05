import axios from "axios";

const URL_CATEGORY = "http://localhost:3080/category";

export const getAllCategory = async () => {
  try {
    const res = await axios.get(URL_CATEGORY);
    return res.data;
  } catch (e) {
    return [];
  }
};
