import axios from "axios";

const apiClient = axios.create(
  {
    baseURL: 'https://tave-dgdg.run.goorm.io'
  }
)

export default apiClient;