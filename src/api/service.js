import axios from "../axios";

class StoreService {
  getAllCategories() {
    return axios.get("/categories");
  }
  getCategoryById(id) {
    return axios.get(`/categories/${id}/products`);
  }
  getProductById(id) {
    return axios.get(`/products/${id}`)
  } 
  getAllUsers() {}
}

export default new StoreService();
